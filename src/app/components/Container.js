export default function Container(props) {
    const className = props.className;
    return (
        <section className={`flex w-screen h-screen overflow-hidden ${className}`}>
            {props.children}
        </section>
    )
}