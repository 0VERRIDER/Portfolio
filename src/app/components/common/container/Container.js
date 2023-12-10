import { forwardRef } from 'react';

const Container = forwardRef((props, ref) => {
    const className = props.className;
    const id = props.id;

    return (
        <section ref={ref} id={id} className={`flex w-screen min-h-screen h-full overflow-hidden ${className}`}>
            {props.children}
        </section>
    );
});

export default Container;
