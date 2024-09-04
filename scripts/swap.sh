#!/bin/bash

# DESCRIPTION
# This script is designed to run on EC2 in '/home/ec2-user/Technology/dev/' via GitHub actions call. 
# Seamlessly swaps between website versions (~2 seconds downtime)


# SCRIPT OVERVIEW
    # Checks for a running chickadee-web container
    # If no instance
        # Load web_image.tar image
        # Start new container
    # If instance 
        # Change container name, swap image tags 
        # Load web_image.tar image
        # Stop old container, start new one
        # Remove old image and container


# REQUIRES
# 1.) Built Docker image tar (web_image.tar) deployed to '/home/ec2-user/Technology/dev/' directory
    # Build locally:
        # docker build -t web_image
        # docker save web_image > web_image.tar 
        # scp -o StrictHostKeyChecking=no web_image.tar ec2-user@ec2-18-191-120-27.us-east-2.compute.amazonaws.com:/home/ec2-user/Technology/dev -i 'chickadee-access.pem'
    # Build via GitHub actions:
        # - name: Build Docker Image
        #   run: docker build -t web_image ./web

        # - name: Set up SSH
        #   uses: webfactory/ssh-agent@v0.5.3
        #   with:
        #     ssh-private-key: ${{ secrets.CHICKADEE_PEM }} 
        # (Contents of 'chickadee-access.pem' must be added to 'Actions secrets and variables' as 'CHICKADEE_PEM')
            
        # - name: Copy Docker Image to EC2
        #   run: |
        #     docker save web_image > web_image.tar
        #     scp -o StrictHostKeyChecking=no web_image.tar ec2-user@ec2-18-191-120-27.us-east-2.compute.amazonaws.com:/home/ec2-user/Technology/dev
# 2.) Permissions 
    # chmod 700 '/home/ec2-user/Technology/dev/swap.sh'


start_time=$(date +%s)

chmod 700 '/home/ec2-user/Technology/prod/chickadee/swap.sh'
chmod 744 '/home/ec2-user/Technology/prod/chickadee/Makefile'

echo "Checking for container chickadee-web..."
exists=$(docker ps -q -f name=chickadee-web)

if [ -n "$exists" ]; then
    echo "Found container: $exists"
    echo "Renaming container..."
    echo "Rename chickadee-web to chickadee-web-old"
    docker rename chickadee-web chickadee-web-old
    echo "Swapping tags..."
    echo "Rename image tag web_image to web_image_old"
    docker tag web_image web_image_old
    echo "Removing tag web_image"
    docker rmi web_image
    echo "Loading new image..."
    docker load -i web_image.tar
    echo "Stopping container: $exists..."
    docker stop chickadee-web-old
else
    echo "Loading new image..."
    docker load -i web_image.tar
fi

# container=$(docker run --name chickadee-web -d -p 3000:3000 web_image)
container=$(make deploy 2>&1)
status=$?
echo "Starting container..."
if [  $status -eq 0 ]; then
    echo "Started container."
    if [ -n "$exists" ]; then
        echo "Cleaning up..."
        echo "Removing container chickadee-web-old"
        docker rm chickadee-web-old
        echo "Removing web_image_old"
        docker rmi web_image_old

        end_time=$(date +%s)
        downtime=$((end_time - start_time))
        echo "Downtime: $downtime seconds"
    fi
else
    echo "Unable to start container"
fi

#
# (c)2024 Wolverine Radar Company. All rights reserved.
#

