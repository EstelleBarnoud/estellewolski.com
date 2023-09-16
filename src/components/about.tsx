export function About() {

    return(
        <section className="mb-16 flex" id="about">
            <div className="mr-8" >
            <img alt="Profile Picture" className="rounded-full" src="/images/profile.jpeg" height="100" width="100" />
            </div>
            <div >
            <h1 className="text-5xl font-bold text-black dark:text-white" >
                Hello, I'm Estelle!
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400" >
                I'm a Senior Engineer specialized in Analytics Engineering to provide reliable, timely data to the entire organization ✨.
            </p>
            </div>
        </section>
    )
}
