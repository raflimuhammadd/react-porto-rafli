const AboutDetail = () => {
    return (
        <>
            <div className='container py-16 pb-5'>
                <div className='row'>
                    <div className='col-md-8 mt-3'>
                        <h1 className='mt-5 text-dark display-6 pb-4'>
                            <span className='text-primary'>About.</span> Me.
                        </h1>
                        <p className='col-md-8 fs-5 text-dark text-justify'>
                            As a 5th-semester undergraduate student pursuing a degree in Informatics Engineering at UPN Veteran East Java, I have a keen interest in the world of information and computer technology, with a specific emphasis on cloud computing. Through my studies, I have gained a solid grasp of fundamental concepts in these fields and have honed my programming abilities.
                        </p>
                    </div>
                    <div className='col-md-4 d-flex align-items-center justify-content-center'>
                        <img
                            src='rafli.jpg'
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
