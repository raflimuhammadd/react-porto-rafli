const AboutDetail = () => {
    return (
        <>
            <div className='container py-16 pb-5'>
                <div className='row'>
                    <div className='col-md-8 mt-3'>
                        <h1 className='mt-5 text-dark display-6 pb-4'>
                            <span className='text-primary'>Lorem.</span> Lorem.
                        </h1>
                        <p className='col-md-8 fs-5 text-dark text-justify'>
                            Hii, I'm a fullstack web developer who Passionate about developing an awesome web app.
                            I've been in this industry for more than 3 year. I love to create a web app that make people work
                            easier than ever.
                        </p>
                    </div>
                    <div className='col-md-4 d-flex align-items-center justify-content-center'>
                        <img
                            src='foto1.png'
                            alt='Foto Rafli'
                            width='630'
                            height='450'
                            loading='lazy'
                            className='d-block mx-lg-auto img-fluid'></img>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutDetail;
