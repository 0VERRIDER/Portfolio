export default function LogoLined(props) {
    const { width, height, className } = props

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width | "250"}
            height={height | "202"}
            fill="none"
            viewBox={`0 0 ${width | 250} ${height | 202}`}
            className={className}
        >
            <g stroke="#fff">
                <g id="lined">
                    <rect
                        width="32.347"
                        height="193.746"
                        x="74.741"
                        y="0.885"
                        rx="16.173"
                        transform="rotate(22.482 74.741 .885)"
                    ></rect>
                    <rect
                        width="32.347"
                        height="193.746"
                        x="199.458"
                        y="2.219"
                        rx="16.173"
                        transform="rotate(22.482 199.458 2.219)"
                    ></rect>
                    <rect
                        width="33.849"
                        height="33.849"
                        x="66.712"
                        y="139.598"
                        rx="16.924"
                        transform="rotate(-90 66.712 139.598)"
                    ></rect>
                    <rect
                        width="32.347"
                        height="194.753"
                        x="64.673"
                        y="12.596"
                        fill="#000"
                        rx="16.173"
                        transform="rotate(-21.238 64.673 12.596)"
                    ></rect>
                </g>
                <g fill="#fff" id="filled">
                    <rect
                        width="32.347"
                        height="193.746"
                        x="94.741"
                        y="7.885"
                        rx="16.173"
                        transform="rotate(22.482 94.741 7.885)"
                    ></rect>
                    <rect
                        width="32.347"
                        height="193.746"
                        x="219.458"
                        y="9.219"
                        rx="16.173"
                        transform="rotate(22.482 219.458 9.219)"
                    ></rect>
                    <rect
                        width="33.849"
                        height="33.849"
                        x="86.712"
                        y="146.599"
                        rx="16.924"
                        transform="rotate(-90 86.712 146.599)"
                    ></rect>
                    <rect
                        width="32.347"
                        height="194.753"
                        x="84.673"
                        y="19.596"
                        rx="16.173"
                        transform="rotate(-21.238 84.673 19.596)"
                    ></rect>
                </g>
            </g>
        </svg>
    )
}