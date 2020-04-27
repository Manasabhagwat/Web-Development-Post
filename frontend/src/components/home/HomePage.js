import React, { Component } from "react";

class HomePage extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">WomenIT</h4>
                    <p>This is a forum about women in Tech Today</p>
                    <ul>
                        <li>Women were among the first programmers in the early 20th century, and contributed substantially to the industry. As technology and practices altered, the role of women as programmers has changed, and the recorded history of the field has downplayed their achievements.</li>
                        <li>Since the 18th century, women have developed scientific computations, including Nicole-Reine Lepaute's prediction of Halley's Comet, and Maria Mitchell's computation of the motion of Venus. The first algorithm intended to be executed by a computer was designed by Ada Lovelace who was a pioneer in the field. Grace Hopper was the first person to design a compiler for a programming language. Throughout the 19th and early 20th century, and up to World War II, programming was predominantly done by women; significant examples include the Harvard Computers, codebreaking at Bletchley Park and engineering at NASA.</li>
                        <li>After the 1960s, the "soft work" that had been dominated by women evolved into modern software, and the importance of women decreased. The gender disparity and the lack of women in computing from the late 20th century onward has been examined, but no firm explanations have been established. Nevertheless, many women continued to make significant and important contributions to the IT industry, and attempts were made to readdress the gender disparity in the industry. In the 21st century, women held leadership roles in multiple tech companies, such as Meg Whitman, president and chief executive officer of Hewlett Packard Enterprise, and Marissa Mayer, president and CEO of Yahoo! and key spokesperson at Google.</li>
                        <li>The gender disparity in IT is not global. The ratio of female to male computer scientists is significantly higher in India compared to the West.In Europe, Bulgaria and Romania have the highest rates of women going into computer programming. In government universities in Saudi Arabia in 2014, Arab women made up 59% of students enrolled in computer science. However, the ratio of African American female computer scientists in the US is significantly lower than the global average. It has been suggested there is a greater gap in countries where people of both sexes are treated more equally, contradicting any theories that society in general is to blame for any disparity.</li>
                    </ul>
                        <div className = "App-footer">
                            <h4>Contact Us At</h4>
                            <ul>
                                <li><a><i class="fa fa-phone"></i>Phone: +46 73-1234567</a></li>
                                <li><a href="mailto:womenit@gmail.com"><i class="fa fa-envelope"></i>womenit@gmail.com</a></li>
                            </ul>
                            </div>

                </div>
            </div>
            
        );
    }
}

export default HomePage;