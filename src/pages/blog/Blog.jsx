import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {

    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
            <div ref={ref} className='flex gap-4'>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <h1 className='text-2xl text-red-700'>The differences between uncontrolled and controlled components.</h1>
                    <p>Uncontrolled components : Uncontrolled components are components that manage their state internally and have no communication with the parent or other components in the system. Uncontrolled components have no props, no events, and no callback functions. They are mostly stateless and do not follow a specific pattern or architecture.</p>
                    <br />
                    <p>Controlled components: Controlled components, on the other hand, are components that rely on the parent component to manage their state. They are connected to the parent component through props, events, and callbacks. They follow a specific pattern or architecture such as the Model-View-Controller MVC pattern or the Flux architecture.</p>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <h1 className='text-2xl text-red-700'>How to validate React props using PropTypes</h1>
                    <p>PropTypes is a library built into React that allows you to validate the props being passed to a component. This can be helpful in catching potential bugs and ensuring that your component is being used correctly.</p>
                    <li>Import the PropTypes library at the top of your file:</li>
                    <li>Define the propTypes property on your component and specify the type and shape of the props that your component expects.</li>
                    <li>If a prop is required, you can use the isRequired method to specify that it must be present. For example, if the title prop is required, you can define the PropTypes.string.isRequired</li>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <h1 className='text-2xl text-red-700'>Tell us the difference between nodejs and express js</h1>
                    <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows developers to run JavaScript on the server-side. It provides an environment for executing JavaScript code outside the browser and allows developers to create server-side applications</p>
                    <br />
                    <p>Express.js is a web application framework for Node.js that provides a set of tools and features for building web applications and APIs. It simplifies the process of building server-side web applications by providing a set of pre-built modules and middleware for handling HTTP requests, routing, and more.</p>
                </div>
                <div className='card w-96 bg-base-100 shadow-xl'>
                    <h1 className='text-2xl text-red-700'>What is a custom hook, and why will you create a custom hook?</h1>
                    <p>In React, a custom hook is a JavaScript function that utilizes built-in React hooks to provide a reusable piece of functionality to a component or other custom hooks. Custom hooks allow developers to encapsulate complex logic that can be shared across multiple components.</p>

                </div>
            </div>
        </div>
    );
};

export default Blog;