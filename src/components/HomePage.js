import React from 'react'
import Navbar from './Navbar'
import "../App.css"
import img from "./images/container.jpg"
// import logos from "./images/Content.png"
import logosOne from "./images/Fictional company logo (1).png"
import logosTwo from "./images/Fictional company logo (2).png"
import logosthree from "./images/Fictional company logo (3).png"
import logosFour from "./images/Fictional company logo (4).png"
import logosFive from "./images/Fictional company logo (5).png"
import logosSix from "./images/Image (1).png"
import logosNine from "./images/Fictional company logo.png"
import logosSeven from "./images/Image (2).png"
import logosEight from "./images/Image.png"
import divices from "./images/divices.jpg"
import { Avatar, Collapse } from 'antd'
import { AiOutlinePlayCircle } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbMessageChatbot } from "react-icons/tb";
import { TbMessageHeart } from "react-icons/tb";
import { SiMaterialdesignicons } from "react-icons/si";





const HomePage = () => {

    const text = `
    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.
`;
    const items = [
        {
            key: '1',
            label: 'Is there a free trial available?',
            children: <p>{text}</p>,
        },
        {
            key: '2',
            label: 'Can I change my plan later?',
            children: <p>{text}</p>,
        },
        {
            key: '3',
            label: 'What is your cancellation policy?',
            children: <p>{text}</p>,
        },
        {
            key: '4',
            label: 'Can other info be added to an invoice?',
            children: <p>{text}</p>,
        },
        {
            key: '5',
            label: 'How does billing work?',
            children: <p>{text}</p>,
        },
        {
            key: '6',
            label: 'How do I change my account email?',
            children: <p>{text}</p>,
        }
    ];

    return (
        <>
            <Navbar />
            <div className='d-flex flex-column  justify-content-center align-items-center mt-5 mb-4 text-center' >
                <div className="flex items-center space-x-4 p-2 bg-purple-50  " style={{ display: 'inline-block', border: '1px solid #dd99ff', borderRadius: '10px', backgroundColor: '#f7e6ff' }} >
                    <span className="text-purple-600 p-1 rounded-full me-2" style={{ border: '1px solid #dd99ff', borderRadius: '10px', backgroundColor: 'white' }} >
                        New feature
                    </span>
                    <span className="text-purple-600">Check out the team dashboard</span>
                    <span className="text-purple-600">→</span>
                </div>
                <h1 className='heading' style={{ fontWeight: '600' }} >Beautiful analytics to grow smarter</h1>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                <div style={{ margin: '20px 0' }}  >
                    <button className='m-1 buttons ' style={{ border: '1px solid #7F56D9', padding: ' 10px 30px', backgroundColor: 'transparent', borderRadius: '5px', color: '#7F56D9' }} > <AiOutlinePlayCircle /> Demo </button>
                    <button className='m-1 buttons ' style={{ border: '1px solid #7F56D9', padding: ' 10px 30px', backgroundColor: '#7F56D9', borderRadius: '5px', color: 'white' }} >Sign up</button>
                </div>
            </div>
            <div>
                <img src={img} alt='image' className='w-100 h-100 mb-3' />
                <p style={{ fontSize: '12px' }} className='text-center' >Join 4,000+ companies already growing</p>
                <div className='imagesLogocmp mt-5 mb-5' >
                    <img src={logosOne} />
                    <img src={logosTwo} />
                    <img src={logosthree} />
                    <img src={logosFour} />
                    <img src={logosFive} />
                    <img src={logosNine} />
                </div>
                <hr className='me-5 ms-5' />
            </div>
            <div className='text-center mt-2 p-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'centers' }} >
                <div style={{ width: '500px', }}  >

                    <p style={{ fontSize: '13px', color: '#6941C6' }} >Features</p>
                    <h1 style={{ fontSize: '20px', fontWeight: 'bolder' }} >Analytics that feels like it’s from the future</h1>
                    <p style={{ fontSize: '14px' }} >Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                </div>
            </div>
            <div className='text-center boxesIdeas ' >
                <div>
                    <TiMessages className='fs-3 mb-2' />
                    <h4>Share team inboxes</h4>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                </div>
                <div>
                    <AiOutlineThunderbolt className='fs-3 mb-2' />
                    <h4>Deliver instant answers</h4>
                    <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                </div>
                <div>
                    <TiMessages className='fs-3 mb-2' />
                    <h4>Manage your team with reports</h4>
                    <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                </div>
                <div>
                    <TbMessageChatbot className='fs-3 mb-2' />
                    <h4>Connect with customers</h4>
                    <p>Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.</p>
                </div>
                <div>
                    <SiMaterialdesignicons className='fs-3 mb-2' />
                    <h4>Connect the tools you already use</h4>
                    <p>Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.</p>
                </div>
                <div>
                    <TbMessageHeart className='fs-3 mb-2' />
                    <h4>Our people make the difference</h4>
                    <p>We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.</p>
                </div>
            </div>
            <div className='text-center border' style={{ padding: '30px' }} >
                <h3 style={{ fontSize: '26px', fontWeight: 'bolder' }} >We’ve been using Untitled to kick start every new project and can’t imagine working without it.</h3>
                <div  >
                    <Avatar src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />
                    <h5>Candice Wu</h5>
                    <p>Product Manager, Sisyphus</p>
                </div>
            </div >
            <div className='text-center' style={{ padding: ' 10px 30px' }} >
                <p style={{ fontSize: '13px', color: '#6941C6' }} >Features</p>
                <h3 style={{ fontSize: '26px', fontWeight: 'bolder' }} >Cutting-edge features for advanced analytics</h3>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                <img src={divices} alt='image' className='w-100 h-100' />
            </div >
            <div className='text-center boxesIdeas' >
                <div>
                    <TiMessages className='fs-3 mb-2' />
                    <h4>Share team inboxes</h4>
                    <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                    <p style={{ fontSize: '13px', color: '#6941C6' }} >Learn more -></p>
                </div>
                <div>
                    <AiOutlineThunderbolt className='fs-3 mb-2' />
                    <h4>Deliver instant answers</h4>
                    <p>An all-in-one customer service platform that helps you balance everything your customers need to be happy.</p>
                    <p style={{ fontSize: '13px', color: '#6941C6' }} >Learn more -></p>
                </div>
                <div>
                    <TiMessages className='fs-3 mb-2' />
                    <h4>Manage your team with reports</h4>
                    <p>Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.</p>
                    <p style={{ fontSize: '13px', color: '#6941C6' }} >Learn more -></p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'centers' }} >
                <div style={{ width: '60%' }} >
                    <h3 className='text-center'>Frequently asked questions</h3>
                    <p className='text-center'>Everything you need to know about the product and billing.</p>
                    {<Collapse accordion items={items} />}
                </div>
            </div>
            <div className='text-center' >
                <h4>Share team inboxes</h4>
                <p>Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.</p>
                <button className='m-1 buttons ' style={{ border: '1px solid #7F56D9', padding: ' 10px 30px', backgroundColor: '#7F56D9', borderRadius: '5px', color: 'white' }} >Get In touch</button>
            </div>
            <div className=' text-center' >
                <div className=' d-flex justify-content-around flex-wrap' >
                    <div className='text-start ps-3 pt-3 ' >
                        <p style={{ fontSize: '13px', color: '#6941C6' }} >Our blog</p>
                        <h4>Lastest blog posts</h4>
                        <p>Tool and strategies modern teams need to help their companies grow.</p>
                    </div>
                    <div>
                        <button className='m-3 buttons ' style={{ border: '1px solid #7F56D9', padding: ' 10px 30px', backgroundColor: '#7F56D9', borderRadius: '5px', color: 'white' }} >Get In touch</button>
                    </div>
                </div>
                <div className='d-flex justify-content-around align-items-center flex-wrap' >
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={logosEight} className="card-img-top h-100" alt="image" />
                        <div className="card-body text-start">
                            <p style={{ fontSize: '13px', color: '#6941C6' }} >Design</p>
                            <h5 className="card-title">UX review presentations</h5>
                            <p className="card-text">
                                How do you create compelling presentations that wow your colleagues and impress your managers?
                            </p>
                            <div className='d-flex' >
                                <Avatar src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />
                                <div style={{ lineHeight: '5px', fontSize: '13px' }} >
                                    <p>Olivia Rhye</p>
                                    <p>20 Jan 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={logosSix} className="card-img-top h-100" alt="image" />
                        <div className="card-body text-start ">
                            <p style={{ fontSize: '13px', color: '#6941C6' }} >Product</p>
                            <h5 className="card-title">Migrating to Linear 101</h5>
                            <p className="card-text">
                                Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.
                            </p>
                            <div className='d-flex' >
                                <Avatar src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />
                                <div style={{ lineHeight: '5px', fontSize: '13px' }} >
                                    <p>Phoenix Baker</p>
                                    <p>20 Jan 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card" style={{ width: "18rem" }}>
                        <img src={logosSeven} className="card-img-top h-100" alt="image" />
                        <div className="card-body text-start">
                            <p style={{ fontSize: '13px', color: '#6941C6' }} >Software Engineering</p>
                            <h5 className="card-title">Building your API stack</h5>
                            <p className="card-text">
                                The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.
                            </p>
                            <div className='d-flex' >
                                <Avatar src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" />
                                <div style={{ lineHeight: '5px', fontSize: '13px' }} >
                                    <p>Lana Steiner</p>
                                    <p>20 Jan 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='d-flex flex-column  justify-content-around align-items-center mt-5 mb-4 text-center' >
                <h1 className='heading' style={{ fontSize: '23px', fontWeight: '600' }} >Beautiful analytics to grow smarter</h1>
                <p>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</p>
                <div style={{ margin: '20px 0' }}  >
                    <button className='m-1 buttons ' style={{ border: '1px solid #7F56D9', padding: ' 10px 30px', backgroundColor: 'transparent', borderRadius: '5px', color: '#7F56D9' }} >Learn more</button>
                    <button className='m-1 buttons ' style={{ border: '1px solid #7F56D9', padding: ' 10px 30px', backgroundColor: '#7F56D9', borderRadius: '5px', color: 'white' }} >Get Started</button>
                </div>
            </div>
            <div className='m-3' >
                <ul className='m-0 p-0 d-flex flex-wrap justify-content-around text-center ' >
                    <li>
                        <ul>
                            <li className='fw-bolder fs-6' style={{ color: '#667085' }}  >Legal</li>
                            <li>Overview</li>
                            <li>Features</li>
                            <li>Solutions</li>
                            <li>Tutorials</li>
                            <li>Pricing</li>
                            <li>Releases</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className='fw-bolder fs-6' style={{ color: '#667085' }}  >Legal</li>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>News</li>
                            <li>Media kit</li>
                            <li>Contact</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className='fw-bolder fs-6' style={{ color: '#667085' }}  >Legal</li>
                            <li>Blog</li>
                            <li>Newsletter</li>
                            <li>Events</li>
                            <li>Help center</li>
                            <li>Tutorial</li>
                            <li>Support</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className='fw-bolder fs-6' style={{ color: '#667085' }}  >Legal</li>
                            <li>Startups</li>
                            <li>EnterPrise</li>
                            <li>Government</li>
                            <li>Saas Center</li>
                            <li>Marketplaces</li>
                            <li>Ecommerce</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className='fw-bolder fs-6' style={{ color: '#667085' }}  >Legal</li>
                            <li>Twitter</li>
                            <li>Linkdin</li>
                            <li>facebook</li>
                            <li>GitHub</li>
                            <li>AngelList</li>
                            <li>dribble</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li className='fw-bolder fs-6' style={{ color: '#667085' }}  >Legal</li>
                            <li>terms</li>
                            <li>Primery</li>
                            <li>Cookies</li>
                            <li>Licenses</li>
                            <li>Settings</li>
                            <li>Contact</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );

}

export default HomePage