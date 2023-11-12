export default function Container(props) {
    const className = props.className;
    return (
        <section className={`flex w-screen min-h-screen h-full overflow-hidden ${className}`}>
            {props.children}
        </section>
    )
}