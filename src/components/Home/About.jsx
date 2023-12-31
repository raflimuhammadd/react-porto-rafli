import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {

    const [tab, setTab] = useState(1);

    return (
        <>
            <div className='container py-16'>
                {tab == 1 && (
                    <div>
                        <h1 className='border-bottom mt-5 text-dark display-6 pb-4 text-center'>
                            About Me
                        </h1>
                        <p className='text-dark fs-5 text-center'>
                            As a 5th-semester undergraduate student pursuing a degree in Informatics Engineering at UPN Veteran East Java, I have a keen interest in the world of information and computer technology, with a specific emphasis on cloud computing. Through my studies, I have gained a solid grasp of fundamental concepts in these fields and have honed my programming abilities.
                        </p>
                    </div>
                )}

                {tab == 2 && (
                    <div>
                        <h1 className='border-bottom mt-5 text-dark display-6 pb-4 text-center'>
                            About Me#2
                        </h1>
                        <p className='text-dark fs-5 text-center'>
                            As a 5th-semester undergraduate student pursuing a degree in Informatics Engineering at UPN Veteran East Java, I have a keen interest in the world of information and computer technology, with a specific emphasis on cloud computing. Through my studies, I have gained a solid grasp of fundamental concepts in these fields and have honed my programming abilities.
                        </p>
                    </div>
                )}


                <div className='d-flex align-items-center justify-content-center'>
                    <div
                        onClick={() => setTab(1)}
                        className={
                            "number-wrap mx-2 " +
                            (tab == 1 ? "bg-primary text-white " : "")
                        }>
                        1
                    </div>
                    <div
                        onClick={() => setTab(2)}
                        className={"number-wrap mx-2 " +
                            (tab == 2 ? "bg-primary text-white " : "")
                        }>
                        2
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;


// <div className='d-flex align-items-center justify-content-center'>
//     <div
//         onClick={() => setTab(1)}
//         className={
//             "number-wrap mx-2 " +
//             (tab == 1 ? "bg-primary text-white" : "")
//         }>
//         1
//     </div>
//     <div
//         onClick={() => setTab(2)}
//         className={
//             "number-wrap mx-2 " +
//             (tab == 2 ? "bg-primary text-white" : "")
//         }>
//         2
//     </div>
