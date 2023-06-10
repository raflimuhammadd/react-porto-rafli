const Skills = () => {
    return (
        <>
            <div className='dots-bg py-5'>
                <div className='container'>
                    <h1 className='border-bottom mt-5 mb-5 text-dark display-6 pb-4 text-center'>
                        Skills
                    </h1>
                    <div className='row d-flex justify-content-between'>
                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <h3 className='text-dark mx-3 text-center'>
                                <i className='fa-brands fa-vuejs'></i>
                                <p className='fs-6'>Vue Js</p>
                            </h3>
                            <h3 className='text-dark mx-3 text-center'>
                                <i className='fa-brands fa-laravel'></i>
                                <p className='fs-6'>Laravel</p>
                            </h3>
                            <h3 className='text-dark mx-3 text-center'>
                                <i className='fa-brands fa-react'></i>
                                <p className='fs-6'>React</p>
                            </h3>
                        </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-center'>
                            <h3 className='text-dark mx-3 text-center'>
                                <i className='fa-brands fa-node-js'></i>
                                <p className='fs-6'>Node Js</p>
                            </h3>
                            <h3 className='text-dark mx-3 text-center'>
                                <i className='fa-solid fa-database'></i>
                                <p className='fs-6'>Database</p>
                            </h3>
                            <h3 className='text-dark mx-3 text-center'>
                                <i className="fa-solid fa-c"></i>
                                <p className='fs-6'>C</p>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
