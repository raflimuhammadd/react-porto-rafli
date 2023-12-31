const ContactDetail = () => {
    return (
        <>
            <div className='container py-16'>
                <div className='row'>
                    <div className='col-md-7 mt-3'>
                        <h1 className='mt-5 text-dark display-6 pb-4'>
                            <span className='text-primary'>My</span> Contact
                        </h1>
                        <p className='col-md-10 fs-5 text-dark'>
                            As a 5th-semester undergraduate student pursuing a degree in Informatics Engineering at UPN Veteran East Java, I have a keen interest in the world of information and computer technology, with a specific emphasis on cloud computing. Through my studies, I have gained a solid grasp of fundamental concepts in these fields and have honed my programming abilities.
                        </p>
                    </div>
                    <div className='col-md-5 mt-3 d-flex align-items-center justify-content-center'>
                        <div>
                            <div className='mb-2'>
                                <a
                                    href='#'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-regular fa-envelope'></i> raflimuh09@gmail.com
                                </a>
                            </div>
                            <div className='mb-2'>
                                <a
                                    href='#'
                                    target='_blank'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-brands fa-whatsapp'></i> -
                                </a>
                            </div>
                            <div className='mb-2'>
                                <a
                                    href='#'
                                    target='_blank'
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-brands fa-instagram'></i> -
                                </a>
                            </div>
                            <div className='mb-2'>
                                <a
                                    href='https://linkedin.com/in/raflimuhammadd/ '
                                    target='www.linkedin.com/in/raflimuhammadd '
                                    className='text-dark fs-4 text-decoration-none'>
                                    <i className='fa-brands fa-linkedin'></i> raflimuhammadd
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactDetail;
