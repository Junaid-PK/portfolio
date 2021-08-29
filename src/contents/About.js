import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Junaid <mark className="mark2">Hussnain</mark></h2>
            <p>Full Stack Developer</p>
            <br></br>
            <p className="p10 pxx">I started my journey in the world of computers from an young age,
            now I’m 21 years old, Pursuing my Computer Science and Engineering Degree in
            GCUF.  Web development is my center of interest, i always
            love the idea of cross-platform development, I love working with techs like Laravel and React. I also like
            creating Interactive UI components for better UX  and share those design and codes
            to the world through Github.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>Bachelors in CS</h4>
            <p className="p1">Punjab, Pakistan</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>Sep 2018 - 2022</p>
            <h4>University</h4>
            <p className="p1">Government College University Faislabad</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>Sep 2018</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">HTML</div>
            <div class="sk s2 glass">CSS</div>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">PHP</div>
            <div class="sk s6 glass">LARAVEL</div>
            <div class="sk s6 glass">C++</div>
            <div class="sk s6 glass">UI/UX</div>
            </div>
            )
        }
    }
    
export default About
    