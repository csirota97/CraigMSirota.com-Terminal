let cmdIndicator = 0;
const downloadFlag = "--download";
const contactFlag = "--contact";
const skillsFlag = "--skills";
const workExperienceFlag = "--experience";
const educationFlag = "--education";
const projectsFlag = "--projects";
const awardsFlag = "--awards";
const historyFlag = "--history";
const skills = "Javascript, React, Java, Python, Ruby, Rails, Flask, HTML, CSS, SQL, CCL, XML, Maven, NPM, Git, Jira, Accessibility (WCAG 2.1), Jenkins, Docker, Android Studio, AWS EC2, AWS RDS, Linux, Windows, MacOS"

const commands = {
    "about": "Provides a short bio about Craig",
    "clear": "Clears content from screen. Using the " + historyFlag + " flag will clear the command history from storage.",
    "contact": "Lists out Craig's contact information",
    "help": "Provides a list of available commands. Use '<i>help -s [command]</i>' for details regarding a specidic command.",
    "home": "Resets the site to the default view",
    "resume": ("Provides a text version of Craig's resume.<br>"+
        "&nbsp&nbspUse '<i>resume " + awardsFlag + "</i>' for a list of awards and certifications<br>" +
        "&nbsp&nbspUse '<i>resume " + contactFlag + "</i>' for contact information<br>" +
        "&nbsp&nbspUse '<i>resume "+ downloadFlag + "</i>' for a downloadable copy&nbsp&nbsp---&nbsp&nbsp&nbsp&nbspCan not be combined with other flags<br>"+
        "&nbsp&nbspUse '<i>resume " + educationFlag + "</i>' for a list of education history<br>" +    
        "&nbsp&nbspUse '<i>resume " + workExperienceFlag + "</i>' for a list professional work experience history<br>" +
        "&nbsp&nbspUse '<i>resume " + projectsFlag + "</i>' for a list of projects<br>" +
        "&nbsp&nbspUse '<i>resume " + skillsFlag + "</i>' for a list of languages and technical competencies<br>")
}

const commandsWithAdditions = [
    'help', 'resume'
];

const aboutMe = ("<h2><u>Craig M. Sirota</u></h2>"+
"<h2>Passionate Software Engineer with a Drive for Innovation</h2>"+
"<p>I'm a full-stack developer with a passion for building elegant and efficient software solutions. Since my first foray into coding as a high school sophomore, I've been captivated by the power of technology to transform ideas into reality. My journey continued through Rutgers University, where I graduated with a degree in computer science and further honed my skills in various languages and frameworks.</p>"+
"<p>Today, I'm proficient in React, Ruby on Rails, Java, JavaScript, Python, Flask, and Node.js, constantly expanding my arsenal to tackle new challenges. I thrive in environments that encourage learning and collaboration, and I'm always eager to explore uncharted technical territories. Whether it's architecting complex systems or diving into intricate code, I approach every project with a can-do attitude and a dedication to excellence.</p>"+
"<h3>Leadership & Collaboration</h3>"+
"<p>As a natural leader, I possess the ability to motivate and inspire others to achieve their full potential. I believe in fostering a positive and collaborative work environment where everyone's voice is heard and valued. My unwavering optimism and enthusiasm are contagious, creating a space where creativity and innovation can flourish.</p>"+
"<h3>Ready to Collaborate?</h3>"+
"<p>Ready to embark on your next exciting project? Let's connect and discuss how we can collaborate to bring your vision to life!</p>");
const contactMe = ("<h2><u>Contact Me</u></h2>"+
    "Craig M. Sirota<br>" +
    '<b>Email</b> - <a href="mailto: craigmsirota@gmail.com">CraigMSirota@gmail.com</a><br>' +
    '<b>Phone Number</b> - <a href="tel: +19088948339">(908) 894-8339</a><br>' +
    '<b>LinkedIn</b> - <a href="https://www.linkedin.com/in/CraigMSirota" target="_blank">Craig Sirota</a><br>'+
    '<b>Github</b> - <a href="https://www.github.com/csirota97" target="_blank">@CSirota97</a>');
const resumeHeader = '<p class="c12"><span class="c11">Craig M. Sirota</span></p>';
const contactSection = ('<hr><p class="c21"><span class="c0"></span></p>' +
    '<p class="c12"><span class="c13"><a href="tel: +19088948339">(908) 894-8339</a></span></p><p class="c12"><span class="c13"><a href="mailto: craigmsirota@gmail.com">CraigMSirota@gmail.com</a></span></p><p class="c12"><span class="c13 c18"><a class="c16" href="https://www.google.com/url?q=http://www.linkedin.com/in/CraigMSirota&amp;sa=D&amp;source=editors&amp;ust=1701703545906287&amp;usg=AOvVaw01t1rlAxJk8fWW_WwSyEmi">http://www.linkedin.com/in/CraigMSirota</a></span><span class="c13">&nbsp;</span><span class="c0"></span></p>' + 
    '<p class="c12"><span class="c13"></span><span class="c18 c13"><a class="c16" href="https://www.google.com/url?q=https://github.com/csirota97&amp;sa=D&amp;source=editors&amp;ust=1701703545906635&amp;usg=AOvVaw3XWz8md5csv6YB7iOziizr">https://github.com/csirota97</a></span><span class="c13"></span></p>');
const techSkillsSection = ('<hr><p class="c20"><span class="c15 c26 c29"></span></p>' +
    '<p class="c1"><span class="c22">Technical Skills &amp; Languages</span></p>' +
    '<p class="c19"><span class="c6">'+ skills +'</span></p>');
const workExperienceSection = '<hr><p class="c1"><span class="c15 c22 c26">WORK EXPERIENCE</span></p><div></div><p class="c7 c27"><span class="c15 c22 c23 tab">Software Engineer:</span></p><p class="c7"><span class="c0 tab2">Oracle Corporation (formerly Cerner Corporation) - (July 2020-Present)</span></p><p class="c7"><span class="c0 tab2">Freelance - (Sept 2023 - Present)</span></p>'
const educationSection = ('<hr><p class="c1"><span class="c22">EDUCATION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>' +
    '<p class="c5"><span class="c22 c31 c23 tab">Rutgers University </span><span class="c23 c28">- New Brunswick, NJ - B.S. Computer Science - </span><span class="c30 c22 c23">2020</span></p>' +
    '<p class="c5"><span class="c22 c23 c31 tab">IBM Full Stack Software Developer Professional Certificate </span><span class="c28 c23">- Coursera -</span><span class="c30 c22 c23">&nbsp;2023 - Present</span></p>');
const projectsSection = ('<hr><p class="c1"><span class="c22">PROJECTS</span></p><div class="tab">' +
    '<p class="c24"><span class="c15 c22 c23">Revenue Cycle Management - Oracle Corporation - (Oct. 2020-Present)</span></p>' +
    '<p class="c2 c3"><span class="c6">An application designed to simplify the registration, scheduling, and billing of patients within medical networks</span></p>' +
    '<p class="c2"><span class="c0">Scheduling Engines Rails 6.1 Upgrade - Rails - (Sept. 2023-Present)</span></p>' +
    '<ul class="c17 lst-kix_9byhgany2btp-0 start"><li class="c8 c4 li-bullet-0"><span class="c6">Upgraded 24 Rails projects from Rails 5.2 to Rails 6.1.7.3 to satisfy CVE-2023-23913 for federal clients</span></li></ul>' +
    '<p class="c2"><span class="c0">Appointment Type Location Filter By Resources - Java/SQL - (March 2023-July 2023)</span></p>' +
    '<ul class="c17 lst-kix_9byhgany2btp-0"><li class="c4 c8 li-bullet-0"><span class="c6">Modified Java-based REST api endpoint that retrieves Appointment Type Locations to include a new filter parameter.</span></li><li class="c8 c4 li-bullet-0"><span class="c6">Updated JDBC to accept the filter from the REST layer and updated the SQL query with that parameter.</span></li></ul>' +
    '<p class="c2"><span class="c0">Add Appointment Plus Accessibility Uplift - React/Java - (April 2022-March 2023)</span></p>' +
    '<ul class="c17 lst-kix_9byhgany2btp-0"><li class="c8 c4 li-bullet-0"><span class="c6">Led the accessibility uplift of a complex workflow to meet the WCAG 2.1 standard, ensuring compliance and usability for users with disabilities</span></li><li class="c8 c4 li-bullet-0"><span class="c6">Conducted in depth reviews of all HTML and React components to ensure modern accessibility standards were met</span></li></ul>' +
    '<p class="c2"><span class="c0">Screen Reader Not Reading From Embedded Browser Investigation - (Oct. 2022-Jan. 2023)</span></p>' +
    '<ul class="c17 lst-kix_9byhgany2btp-0"><li class="c8 c4 li-bullet-0"><span class="c6">Investigated and resolved an issue with screen reader accessibility in the Add Appointment Plus project, documented findings, and recommended solutions to UX and regulatory personnel</span></li></ul>' +
    '<p class="c2"><span class="c0">Location Based Scheduling - CCL - (April 2022-May 2022)</span></p>' +
    '<ul class="c17 lst-kix_9byhgany2btp-0"><li class="c8 c4 li-bullet-0"><span class="c6">Resolved a bug in the scheduling system that caused appointments to be scheduled for the wrong date in certain timezones, improving scheduling accuracy and user experience</span></li></ul>' +
    '<p class="c2"><span class="c0">Location Description Enter Information - Java/SWT/SQL - (Jan. 2022-March 2022)</span></p>' +
    '<ul class="c17 lst-kix_9byhgany2btp-0"><li class="c8 c4 li-bullet-0"><span class="c6">Modified Java-based REST api endpoint that retrieves Locations to include a new parameter to add a toggle for whether locations should be searched by location name or description</span></li><li class="c8 c4 li-bullet-0"><span class="c6">Added logic to JDBC layer to query based on which type of location string was provided</span></li><li class="c8 c4 li-bullet-0"><span class="c6">Added toggle control to SWT admin tool to set which string locations should be searched by</span></li></ul>' +
    '<p class="c2"><span class="c0">Kiosk Profiles Admin Build Tool Uplift - React/Ruby on Rails - (July 2021-Dec. 2021)</span></p>' +
    '<ul class="c17 lst-kix_9byhgany2btp-0"><li class="c8 c4 li-bullet-0"><span class="c6">Upgraded a Rails-based UI to a React-based UI using a Rails Engine, improving performance and usability for administrators</span></li></ul>' +
    '<p class="c24"><span class="c15 c22 c23">Healing The Vote - Freelance - React Native/Flask/MySQL - (Sept. 2023-Present)</span></p><p class="c2 c3"><span class="c6">A mobile app designed to gamify the effort of voter registration, to increase voter turnout.</span></p><ul class="c17 lst-kix_vrr4bhn4oygk-0 start"><li class="c4 c32 li-bullet-0"><span class="c6">Created a Flask-based REST API to communicate with a MySQL DB to handle user registration and user statistics</span></li><li class="c4 c32 li-bullet-0"><span class="c6">Designed and implemented a React Native front end to provide users with an intuitive experience</span></li></ul><p class="c5"><span class="c15 c22 c23">Automated Live Virtual Assistant Network (A.L.V.A.N.) - Personal Project - (Feb. 2020-May 2023)</span></p><p class="c2 c3"><span class="c6">A custom home automation/virtual assistant network similar to a Google Home or Amazon Alexa, utilizing a custom linear regression machine learning algorithm to determine the proper response to user queries.</span></p><p class="c2"><span class="c0">ALVAN HUB UI - React/Java (Android)</span></p><ul class="c17 lst-kix_d867ry4lu4lx-0 start"><li class="c8 c4 li-bullet-0"><span class="c6">A React-based UI, wrapped in an Android app to be run on a tablet as a standalone app, using the JS SpeechRecognizer library to parse voice commands from user</span></li><li class="c8 c4 li-bullet-0"><span class="c6">Displayed reminders, weather forecasts, and security camera feeds</span></li></ul><p class="c2"><span class="c0">ALVAN API - Python (Flask)/MySQL</span></p><ul class="c17 lst-kix_um6as6vaajcr-0 start"><li class="c8 c4 li-bullet-0"><span class="c6">Flask API for all service calls from the UI and interfaces with MySQL database to store all data for the system</span></li><li class="c8 c4 li-bullet-0"><span class="c10">Wrote custom linear regression algorithm to determine which command the user is trying to trigger, based on their query</span></li></ul></div>');
const awardsSection = '<hr><p class="c1"><span class="c22">AWARDS and CERTIFICATES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p class="c5"><span class="c22 c23 c30 tab">RCM (Revenue Cycle Management) Champion Award - Q2 2022</span></p><p class="c3 c9"><span class="c10 tab2">Recognition of outstanding contribution to the success of Cerner Revenue Cycle</span></p>';
const resumeText = "<hr>" + resumeHeader;
const availableCommands = "The following commands are available:<ul>" + Object.keys(commands).map(command => "<li>"+(commandsWithAdditions.includes(command) ?  command + " *" : command)+"</li>").join('') + "</ul><br>You can also use '<i>help -s [command]</i>' for more information about a specific command.<br><br><small>'*' is not part of any command. '*' denotes that a command has additional flags available. See commands help page for more details.</small>";
const commandNotUnderstood = (commandWords) => "Command '<i>"+ commandWords.join(' ') + "</i>' was not understood. Please check your syntax or use the '<i>help</i>' command for more assistance.";
const historyCleared = "HISTORY CLEARED";
const screenCleared = "SCREEN CLEARED";
const flagName = (sFlag) => "<u>"+sFlag+"</u><br><small>"+commands[sFlag]+"</small>";
const resumeOpening = "Resume is opening";
const resumeURL = "Resume.pdf";
const homeText = "This site is designed to mimic the look and feel of a terminal. To navigate, type a command, hit enter, and see what happens.<br>Remember, you can always use the '<i>home</i>' command to get back here.<br><br><small>If you need help getting started, type '<i>help</i>' and hit enter to see the available commands.</small>";


/**
 * Processes the command entered
 * @param {Array[string]} commandWords - list of words to process 
 * @returns a string of html to be displayed in response to the entered command
 */
const processCommand = (commandWords) => {
    if (commandWords === "") {
        return ""
    } else if (checkCommand('about', commandWords)) {
        return aboutMe;
      
    } else if (checkCommand('home', commandWords)) {
        document.getElementById('cmdHistory').innerHTML = '';
        return homeText;
      
    } else if (checkCommand('help', commandWords)) {
        sFlag = checkFlag('-s', commandWords);
        if (sFlag) {
            return flagName(sFlag);
        }
        return availableCommands;
    } else if (checkCommand('resume', commandWords)) {
        const downloadFlagPresent = checkFlag(downloadFlag, commandWords);
        const techSkillsFlagPresent = checkFlag(skillsFlag, commandWords);
        const contactSectionFlagPresent = checkFlag(contactFlag, commandWords);
        const workExperienceFlagPresent = checkFlag(workExperienceFlag, commandWords);
        const educationFlagPresent = checkFlag(educationFlag, commandWords);
        const projectsFlagPresent = checkFlag(projectsFlag, commandWords);
        const awardsFlagFlagPresent = checkFlag(awardsFlag, commandWords);
        if (downloadFlagPresent) {
            download(resumeURL);
            return resumeOpening;
        }

        let compositeResume = resumeText;
        if (contactSectionFlagPresent) {
            compositeResume += contactSection
        }
        if (techSkillsFlagPresent) {
            compositeResume += skillsSection
        }
        if (workExperienceFlagPresent) {
            compositeResume += workExperienceSection
        }
        if (educationFlagPresent) {
            compositeResume += educationSection
        }
        if (projectsFlagPresent) {
            compositeResume += projectsSection
        }
        if (awardsFlagFlagPresent) {
            compositeResume += awardsSection
        }
        
        if (compositeResume === resumeText) {
            compositeResume = resumeText +
            contactSection +
            techSkillsSection +
            workExperienceSection +
            educationSection +
            projectsSection +
            awardsSection;
        }
        return compositeResume + "<br><p>Please use '<i>resume "+ downloadFlag+"</i>' for a PDF download</p>";
    } else if (checkCommand('clear', commandWords)) {
        historyFlagPresent = checkFlag(historyFlag, commandWords);
        if (historyFlagPresent) {
            window.localStorage.setItem('cmdHistory', JSON.stringify([]));
            document.getElementById('cmdHistory').innerHTML = '';
            return historyCleared;
        }
        document.getElementById('cmdHistory').innerHTML = '';
        return screenCleared;
        
    } else if (checkCommand('contact', commandWords)) {
        return contactMe;
    }

    return commandNotUnderstood(commandWords);
};

const checkCommand = (command, commandWords) => {
    if (commandWords[0] !== command) {
        return false;
    }
    return true;
}


/**
 * Checks whether a command is in the command
 * @param {string} flag - the flag to search for
 * @param {Array[string]} commandWords - list of words that may contain a flag
 * @returns the value of the flag if present, true if the flag has no value for special cases, or undefined if the flag was not found
 */
const checkFlag = (flag, commandWords) => {
    const noFollowUpFlags = [downloadFlag, historyFlag, skillsFlag, contactFlag, workExperienceFlag, educationFlag, projectsFlag, awardsFlag];

    if (commandWords.includes(flag)) {
        if (noFollowUpFlags.includes(flag)) {
            return true;
        }
        return commandWords[commandWords.indexOf(flag)+1]
    }
    return undefined;
}

/**
 * Opens a file in new tab to be downloaded by the user
 * @param {string} url - url of file to be downloaded
 * @param {string} name - name of file to be downloaded
 */
function download(url, name) {
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}


/**
 * Function that runs when the page loads
 * 
 * Loads terminal history
 * Scrolls to cursor
 */
function onLoad() {
    window.mobileAndTabletCheck = function() {
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    };
    if (window.mobileAndTabletCheck()) {
        alert("This site is designed to be used as a desktop experience. Please try again on a different device for an optimal experience.");
    }
    let commandHistoryFromStorage;
    try {
        commandHistoryFromStorage = JSON.parse(window.localStorage.getItem('cmdHistory'));
    } catch (error) {
        window.localStorage.setItem('cmdHistory', JSON.stringify([]));
        commandHistoryFromStorage = []
    }

    if (commandHistoryFromStorage.length === 0) {
        const thread = document.getElementById("cmdHistory");

        const newCommand = document.createElement('li');
        const newOutput = document.createElement('li');
        newCommand.textContent = ">  " + "Welcome to Craig M. Sirota's Portfolio";
        newOutput.innerHTML = homeText;
        newCommand.setAttribute('class', 'terminalText terminalCommand');
        newOutput.setAttribute('class', 'terminalText terminalOutput');
        thread.appendChild(newCommand);
        thread.appendChild(newOutput);
    }

    const thread = document.getElementById("cmdHistory");

    commandHistoryFromStorage.forEach((commandOutputPair) => {
        const newCommand = document.createElement('li');
        const newOutput = document.createElement('li');
        newCommand.textContent = ">  " + commandOutputPair[0];
        newOutput.innerHTML = commandOutputPair[1];
        newCommand.setAttribute('class', 'terminalText terminalCommand');
        newOutput.setAttribute('class', 'terminalText terminalOutput');
        thread.appendChild(newCommand);
        thread.appendChild(newOutput);
    });
    
    const contentPane = document.getElementById('content');
    contentPane.scrollTop = contentPane.scrollHeight;
    document.onmousedown = (e) => {
        e.preventDefault();
        document.getElementById("cmdInput").focus();
    }
}

/**
 * Plays a beep sound
 */
const beep = () => {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}

/**
 * Keydown handler for main input field
 * @param {Event} event - onkeydown event
 * @param {HTMLNode} element - the HTML node representing the input field
 */
function input_onkeydown(event, element) {
    if (event.key === 'Enter') {
        const command = element.value;
        element.value = "";
        const thread = document.getElementById("cmdHistory");
        const newCommand = document.createElement('li');
        const newOutput = document.createElement('li');
        newCommand.textContent = ">  " + command;
        const output = processCommand(command.trim().split(' '));
        newOutput.innerHTML = output;
        newCommand.setAttribute('class', 'terminalText terminalCommand');
        newOutput.setAttribute('class', 'terminalText terminalOutput');
        let commandHistoryFromStorage = JSON.parse(window.localStorage.getItem('cmdHistory')) || [];
        if (output !== screenCleared) {
            thread.appendChild(newCommand);
            thread.appendChild(newOutput);
        }
        commandHistoryFromStorage.push([command, output]);
        if (output !== historyCleared) {
            window.localStorage.setItem('cmdHistory', JSON.stringify(commandHistoryFromStorage))
        }
        const contentPane = document.getElementById('content');
        contentPane.scrollTop = contentPane.scrollHeight;
        cmdIndicator = 0;
    } else if (event.key === "ArrowUp") {
        let commandHistoryFromStorage = JSON.parse(window.localStorage.getItem('cmdHistory')) || [];
        if (cmdIndicator < commandHistoryFromStorage.length) {
            cmdIndicator += 1;
            element.value = commandHistoryFromStorage[commandHistoryFromStorage.length-cmdIndicator][0];
        } else {
            beep();
        }
        
    } else if (event.key === "ArrowDown") {
        let commandHistoryFromStorage = JSON.parse(window.localStorage.getItem('cmdHistory')) || [];
        if (cmdIndicator > 0) {
            cmdIndicator -= 1;
            element.value = cmdIndicator > 0 ? commandHistoryFromStorage[commandHistoryFromStorage.length-cmdIndicator][0] : '';
        } else {
            beep();
        }
        
    }
}
