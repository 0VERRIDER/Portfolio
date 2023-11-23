export default function Container(props) {
    const className = props.className;
    const id = props.id;

    return (
        <section id={ id } className={`flex w-screen min-h-screen h-full overflow-hidden ${className}`}>
            {props.children}
        </section>
    )
}