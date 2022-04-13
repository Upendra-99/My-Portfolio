import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import "./Calender.css"


function Calender() {




    return (
        <div className="cal_main">
            <h1 className="project_header">Git Stats</h1>
            <div className="cal_banner">
                <p><img src="https://github-readme-stats.vercel.app/api?username=Upendra-99&show_icons=true&locale=en&theme=tokyonight" alt="Upendra-99" className="cal_p" /></p>
                <p><img src="https://github-readme-streak-stats.herokuapp.com/?user=Upendra-99&theme=highcontrast" alt="github_stats" className="cal_p" /></p>
            </div>
            <GitHubCalendar username="Upendra-99" />
        </div>
    )
}

export default Calender
