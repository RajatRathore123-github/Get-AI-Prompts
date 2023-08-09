import Feed from "@components/Feed"

export default function Home(){
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <div className="orange_gradient text-center">AI-Powered Prompts</div>
            </h1>
            <p className="desc text-center">
                Get AI Prompts is a community-driven platform for sharing and discovering AI-generated prompts for creative writing.
            </p>
            <Feed/>
        </section>
    )
}