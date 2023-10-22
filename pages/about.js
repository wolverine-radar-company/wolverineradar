// pages/blog/index.js

import Link from 'next/link';
import Image from 'next/image'
import { useState } from 'react'; // Import useState
import * as React from 'react'

const people = [
    {
      name: 'Jeff Pennings',
      role: 'Founder and CEO',
      imageUrl:
        'https://media.licdn.com/dms/image/C5603AQFTyd6xHapO_g/profile-displayphoto-shrink_100_100/0/1602772729686?e=1698278400&v=beta&t=c8QDjZEkFoz4tDoZJdjFVS4NuFdkkBAbkt1YkAEEmQo',
    },
    {
        name: 'Antoine Bielek',
        role: 'Radar System Engineer',
        imageUrl:
          'https://media.licdn.com/dms/image/C4D03AQFo_1VNZcb41g/profile-displayphoto-shrink_100_100/0/1639709226752?e=1698278400&v=beta&t=-RzbsPNOjgvEdN978bSv363-N5QWjPmkXVvHEE04a3g',
      },
      {
        name: "Eric D'Urso",
        role: 'System Engineering Intern',
        imageUrl:
          'https://media.licdn.com/dms/image/C4E03AQHekialqPXd9g/profile-displayphoto-shrink_100_100/0/1637972793518?e=1698278400&v=beta&t=cwkokg12iwuoAHGwcSQrlsUHYIfnGu2A-Fa1wAorZ6M',
      },
        {
            name: "John Terhaar",
            role: 'System Engineering Intern',
            imageUrl:
            'https://media.licdn.com/dms/image/D5603AQHuzY4tiY_G8g/profile-displayphoto-shrink_100_100/0/1680220070382?e=1698278400&v=beta&t=iVfTZZPFcViya-BahzUKOGtEgOH0GFpMTM0stuwQI7s',
        },
        
    // More people...
    
  ]
  

  
  export default function Team() {
    const navbar = document.getElementById('navbar');
    if (navbar) 
    {
        navbar.classList.add('bg-black');
    } 
    
    return (
            <div className="mt-20 bg-primary_white py-6 sm:py-8 bg-black">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-logo_blue">Meet our team</h2>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                In 1953 researchers at the University of Michigan established “Project Wolverine” in order to 
                create the worlds first Synthetic Aperture Radar System.  Wolverine Radar Company was established 
                in 2021 to provide the next generation of Michigan Engineers an opportunity to create new applications 
                for Synthetic Aperture Radar data and the satellites that collect it.
                </p>
                {/* <ul role="list" className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 text-white_txt">
                {people.map((person) => (
                    <li key={person.name}>
                    <div className="flex items-center gap-x-6">
                        <Image
                        className="h-16 w-16 rounded-full" 
                        src={person.imageUrl} 
                        alt="" 
                        width={64}
                        height={64}
                        />
                        <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                        <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                        </div>
                    </div>
                    </li>
                ))}
                </ul> */}
             
                </div>
            </div>
    )
  }
  