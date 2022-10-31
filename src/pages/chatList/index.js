// import './chatList.css'
export const ChatList =()=>{
    return(
        <div id='chat'>
            <div id="chatList">
                <div id="userDetail">
                    <div className="profile"></div>
                    <h1 id="userName">Hi Admin</h1>
                    <button class="button-10" role="button">create group</button>
                </div>
                <div id='search'>
                    <input type="text" id='searchField' />
                </div>
                <div id="employeeList">
                    <div className="title">
                        Employee list
                    </div>
                    <div id="employees">
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">Sangili karuppu</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">muniyandi</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">maasanam</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">isakki</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">sudalai</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">kaathavarayan</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">Muthu paandi</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">Sangili karuppu</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">muthupaatan</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">manda karuppu</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">karuppan</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">pechi</div>
                    </div>
                    <div className="employeeDetails">
                        <div className='empProfile'></div>
                        <div className="empName">pavada rayan</div>
                    </div>
                    </div>
                </div>
            </div>
            <div id="chatScreen"></div>
        </div>
    )
}