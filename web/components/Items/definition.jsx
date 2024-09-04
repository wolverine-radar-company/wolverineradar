import 'animate.css';
import styles from 'styles/home.module.css'

export default function Definition(){
    return (
        <div id='definition' className='animate__animated animate__flipInX flex justify-center'>
            <div>
                <h1 className={`text-4xl sm:text-9xl font-extrabold mr-4 text-white`}><span styles={['standout-txt']}>Wolverine Radar</span></h1>
            </div>
        </div>
    );
}

