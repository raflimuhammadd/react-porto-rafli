const RecentWork = () => {
    return (
        <>
            <div className='container py-16 pt-5'>
                <h1 className='border-bottom mt-5 mb-5 text-dark display-6 pb-4 text-center'>
                    Recent Work
                </h1>
                <div className='row gx-2 mb-5'>
                    <div className='col-12 col-lg-4'>
                        <p className='fw-semibold mb-1 fs-5 text-dark'>
                            Tugas Kampus
                        </p>
                    </div>
                    <div className='col-12 col-lg-8'>
                        <p className='fw-semibold fs-5 text-dark'>Web</p>
                        <p className='text-muted text-dark fw-light fs-5'>
                            <span>
                                Membuat Sebuah website.
                            </span>
                        </p>
                        <a
                            target='https://dapoerboenda.netlify.app/'
                            href='https://super-mooncake-74f92d.netlify.app/'
                            className='link-body fs-5 text-primary'>
                            https://app.netlify.app/
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentWork;
