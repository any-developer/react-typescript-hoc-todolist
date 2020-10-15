import React from 'react'
import { useHistory} from 'react-router-dom'


export const AboutPage: React.FC = () => {

    const history = useHistory()

    return (
        <>
        <h1>Information page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus a laboriosam earum et adipisci corrupti odit pariatur repudiandae cupiditate aspernatur eos ab quo inventore, fugiat sequi impedit, obcaecati modi architecto.</p>
        <button className='btn' onClick={() => history.push('/')}>Home</button>
        </>
    )
}