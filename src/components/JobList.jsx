import'../App.scss'

const jobList = ({job, addToFilters}) => {
    return(
        <article className='flex '>
            <div className='flex '>
                <img src={job.logo} alt={job.company + "-logo"}/>
                <div className='job-details'>
                    <div>
                        <span className='job-company '>{job.company}</span>
                        {job?.new && <span className='job-new '>NEW!</span>}
                        {job?.featured && <span className='job-featured '>FEATURED</span>}
                    </div>
                    <p>{job.position}</p>
                    <div className='flex'>
                        <span>{job.postedAt}</span>
                        <span>.</span>
                        <span>{job.contract}</span>
                        <span>.</span>
                        <span>{job.location}</span>
                    </div>
                </div>
            </div>

            <div>
                <button onClick={() => addToFilters({type: "role", value: job.role})}>{job.role}</button>
                <button onClick={() => addToFilters({type: "level", value: job.level})}>{job.level}</button>
                {/* LANGUAGAES */}
                {
                    job.languages.map((language, index) => {
                        return    <button 
                            key={index} 
                            onClick={() => addToFilters({type: "language", value:language})}
                            >{language}</button>
                    })
                }

                {/* TOOLS */}
                {
                    job.tools.map((tool, index) => {
                        
                        return <button
                            key={index} 
                            onClick={() => addToFilters({type: "tool", value: tool})}
                            >{!tool == "" ? tool : ""}</button>
                        
                    })
                }
            </div>
        </article>
    )
}
export default jobList;