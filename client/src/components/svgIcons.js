import { SvgIcon } from "@mui/material"

/*
    We use SvgIcon so the icons can be handled more easily by Material ui components.
    Here some tips to add an SvgIcon in case you too struggle to find informations online:
    - Open the svg with https://jakearchibald.github.io/svgomg/ in order to clean it from useless information.
    - Replace the <svg> tag for <SvgIcon>.
    - Try removing "style" attributes. They are often uncessary and cause errors.
    - If some "style" attributes are necessary, convert them to the React inline style syntax (https://reactjs.org/docs/dom-elements.html#style).
    - Play with the viewBox attribute in order to center the icon and make it uses all available space. Adding a temporary border with inline style might help.
*/

export const ArrowIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 -3 20 20">
                <g>
                    <path d="M0.302825536,7.53652162 L6.27862638,13.4439361 L6.37822306,13.542393 C6.77660979,13.9362206 7.47378655,13.8377637 7.77257659,13.4439361 C8.07136664,13.0501085 8.07136664,12.3609101 7.67297991,12.0655394 L3.39032264,7.83189235 L18.9274048,7.83189235 C19.5249849,7.83189235 19.9233716,7.43806472 19.9233716,6.84732327 C19.9233716,6.25658182 19.5249849,5.86275419 18.9274048,5.86275419 L3.39032264,5.86275419 L7.67297991,1.62910716 C7.97176996,1.23527953 7.97176996,0.742994993 7.67297991,0.349167363 C7.27459319,-0.0446602682 6.67701311,-0.143117176 6.27862638,0.250710455 L0.302825536,6.15812492 C0.00403549366,6.45349564 -0.0955611871,6.84732327 0.103632174,7.2411509 C0.103632174,7.33960781 0.203228855,7.43806472 0.302825536,7.53652162" id="Fill-1"></path>
                </g>
        </SvgIcon>
    )
}

export const Arrow2Icon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 21.776 20.23">
            <path style={{fill:"none", stroke:"#7e7e7e", strokeMiterlimit:10, strokeWidth:"1.75px"}} d="M.219 18.221a.771.771 0 0 1-.143-.87l3.942-8.124L.076 1.1A.77.77 0 0 1 1.085.068l18.461 8.461a.765.765 0 0 1 0 1.394L1.085 18.385a.771.771 0 0 1-.867-.164Z" transform="translate(.903 .901)"/>
        </SvgIcon>
    )
}

export const Arrow3Icon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 21.045 14.743">
            <path d="m15.54 32.48 8.635 6.49a.2.2 0 0 0 .319-.174V34.74c9.823.666 10.982 4.984 10.982 4.984 0-8.982-7.186-10.228-10.982-10.257v-3.651a.187.187 0 0 0-.319-.145l-8.635 6.49a.227.227 0 0 0 0 .319Z" transform="translate(-14.93 -25.11)" style={{fill:"none", stroke:"#005699"}}/>
        </SvgIcon>
    )
}

export const CameraIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="2 3 20 19">
            <path d="M3.6 20.3c-.4 0-.8-.2-1.1-.5-.2-.2-.4-.6-.4-.9V7.7c-.1-.3.1-.7.4-1 .2-.3.5-.4.8-.5H7.9l1.2-2.5h5.7L16 6.2h4.3c.4 0 .8.2 1.1.5.2.2.4.6.4.9v11.2c0 .4-.2.8-.5 1.1-.2.2-.6.4-.9.4H3.6zm0-12.6-.1 11v.1h17.1V7.7h-5.3L14 5.2h-4L8.8 7.7H3.6zm8.4 9.7c-1.2 0-2.3-.5-3.2-1.3-.8-.8-1.3-2-1.3-3.2 0-1.2.5-2.3 1.3-3.2.8-.8 2-1.3 3.2-1.3 1.2 0 2.3.5 3.2 1.3.8.8 1.3 2 1.3 3.2s-.5 2.3-1.3 3.2c-.9.8-2 1.3-3.2 1.3zm0-7.5c-.8 0-1.6.3-2.1.9S9 12.1 9 12.9s.3 1.6.9 2.1c1.1 1.1 3.1 1.1 4.3 0 .6-.6.9-1.3.9-2.1s-.3-1.6-.9-2.1c-.6-.6-1.4-.9-2.2-.9z"/>
        </SvgIcon>
    )
}

export const CameraInBubbleIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 25 25">
            <path d="M25 25H12.5A12.379 12.379 0 0 1 0 12.5 12.379 12.379 0 0 1 12.5 0 12.379 12.379 0 0 1 25 12.5ZM12.5 1.75a11 11 0 0 0-7.625 3.125 10.865 10.865 0 0 0 0 15.25A10.781 10.781 0 0 0 12.5 23.25h10.75V12.5a11 11 0 0 0-3.125-7.625A11 11 0 0 0 12.5 1.75Z"/>
            <path d="M15.125 18.375H6.75a1.329 1.329 0 0 1-1.5-1.25v-8a1.465 1.465 0 0 1 1.375-1.25H15a1.286 1.286 0 0 1 1.375 1.25v.75l1.375-.75A1.146 1.146 0 0 1 19.125 9a1.034 1.034 0 0 1 .625 1v6.25a1.248 1.248 0 0 1-.625 1.125 1.479 1.479 0 0 1-1.25-.125L16.5 16.5v.75a1.276 1.276 0 0 1-1.375 1.125Zm-8.25-1.625h8v-1.625a1.08 1.08 0 0 1 .375-.75.8.8 0 0 1 .75 0l2 1.125v-4.75l-1.875 1.125a.8.8 0 0 1-.75 0 .685.685 0 0 1-.5-.75V9.5h-8Zm11.875-.875Z"/>
        </SvgIcon>
    )
}

export const CancelIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="2 2 20 20">
            <path d="M12 2C6.4771525 2 2 6.4771525 2 12s4.4771525 10 10 10 10-4.4771525 10-10S17.5228475 2 12 2Zm0 1.33333168c2.0746076-.00128199 4.079864.74684198 5.6466667 2.10666832L5.39333333 17.5933333c-2.17561675-2.5749862-2.66070945-6.17789412-1.2436087-9.23660098C5.56682538 5.29802546 8.62897124 3.33855529 12 3.33333168Zm0 17.33333502c-2.08385186-.000638-4.09692832-.7561338-5.66666667-2.1266667L18.5866667 6.38c2.1903962 2.57136307 2.6872505 6.1810635 1.2730136 9.2485834C18.4454435 18.6961032 15.3778286 20.6624553 12 20.6666667Z"/>
        </SvgIcon>
    )
}

export const CheckedIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 16 16">
            <path d="M11.138 5.152 6.802 9.486l-1.936-1.94a.64205296.64205296 0 0 0-.908.908l2.39 2.394a.642.642 0 0 0 .908 0l4.79-4.785a.6431145.6431145 0 0 0-.908-.911Z"/>
            <path d="M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8ZM8 1.284A6.716 6.716 0 1 0 14.716 8 6.723 6.723 0 0 0 8 1.284Z"/>
        </SvgIcon>
    )
}

export const CrossedEyeIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 15.931 12.145">
            <path d="M7.933 10.41a7.081 7.081 0 0 1-3.7-1.292 12.409 12.409 0 0 1-2.874-2.717.237.237 0 0 1 0-.366 14.122 14.122 0 0 1 2.429-2.372L3 2.873a14.6 14.6 0 0 0-2.836 2.93.629.629 0 0 0 .019.87 13.62 13.62 0 0 0 4.222 3.834 7.4 7.4 0 0 0 3.547 1 7.067 7.067 0 0 0 2.948-.711l-.848-.848a5.577 5.577 0 0 1-2.119.462ZM15.74 5.784a13.154 13.154 0 0 0-4.26-3.856A7.284 7.284 0 0 0 8.145.941a6.436 6.436 0 0 0-2.892.6l.848.848a5.691 5.691 0 0 1 1.793-.348 5.788 5.788 0 0 1 2.583.617 11.437 11.437 0 0 1 3.586 2.783c.193.212.347.424.54.636a.209.209 0 0 1 .019.289 13.993 13.993 0 0 1-2.256 2.275l.79.79a14.6 14.6 0 0 0 2.6-2.737.658.658 0 0 0-.016-.91Z"/>
            <path d="m9.687 5.974 1 1a3.349 3.349 0 0 0 .1-.752 2.867 2.867 0 0 0-2.835-2.848 2.576 2.576 0 0 0-.771.116l1.022 1.021a1.738 1.738 0 0 1 1.484 1.463ZM5.311 5.205a2.6 2.6 0 0 0-.193 1.022A2.867 2.867 0 0 0 7.971 9.06a3.005 3.005 0 0 0 1.022-.193l-.906-.906h-.135a1.749 1.749 0 0 1-1.734-1.773v-.077ZM2.882.173A.514.514 0 0 0 2.493 0a.659.659 0 0 0-.556.386.49.49 0 0 0 .135.578l11.007 11.007a.514.514 0 0 0 .386.173.659.659 0 0 0 .559-.386.49.49 0 0 0-.131-.577Z"/>
        </SvgIcon>
    )
}

export const CrossIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 10 10">
            <path d="M32 979.362a.652.652 0 0 0-.652.652v3.7h-3.7a.652.652 0 0 0 0 1.3h3.7v3.7a.652.652 0 0 0 1.3 0v-3.7h3.7a.652.652 0 0 0 0-1.3h-3.7v-3.7a.652.652 0 0 0-.648-.652Z" transform="translate(-27 -979.362)"/>
        </SvgIcon>
    )
}

export const SaltireIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="5 5 14 14">
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
        </SvgIcon>
    )
}

export const EmojiIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 25 25">
            <path d="M12.5 0A12.5 12.5 0 1 0 25 12.5 12.537 12.537 0 0 0 12.5 0Zm0 23.25A10.75 10.75 0 1 1 23.25 12.5 10.749 10.749 0 0 1 12.5 23.25Z"/>
            <path d="M18.25 14a.688.688 0 0 0-.625.25 9.558 9.558 0 0 1-5.125 1.625 7.867 7.867 0 0 1-5.125-1.625C7.25 14 6.875 14 6.75 14a1.34 1.34 0 0 0-.75.25c-.125.125-.125.5-.125.75a.853.853 0 0 0 .375.625A10.559 10.559 0 0 0 12.5 17.5a11.419 11.419 0 0 0 6.25-1.875 1.726 1.726 0 0 0 .375-.5V15a.937.937 0 0 0-.125-.625ZM7.5 10.75a1.049 1.049 0 0 0 1.125-1.125A1.049 1.049 0 0 0 7.5 8.5a1.049 1.049 0 0 0-1.125 1.125A1.049 1.049 0 0 0 7.5 10.75ZM17.5 10.75a1.049 1.049 0 0 0 1.125-1.125A1.116 1.116 0 0 0 17.5 8.5a1.208 1.208 0 0 0-1.125 1.125.994.994 0 0 0 1.125 1.125Z"/>
        </SvgIcon>
    )
}

export const EyeIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 15.931 10.568">
            <path d="M7.933 9.469a7.081 7.081 0 0 1-3.7-1.292A12.409 12.409 0 0 1 1.359 5.46a.237.237 0 0 1 0-.366c.733-.892 3.322-3.276 4.685-3.702l-.791-.79a18.682 18.682 0 0 0-5.089 4.26.629.629 0 0 0 .019.867 13.62 13.62 0 0 0 4.222 3.837 7.4 7.4 0 0 0 3.547 1 7.067 7.067 0 0 0 2.948-.711l-.847-.853a5.577 5.577 0 0 1-2.12.467Z"/>
            <path d="M15.74 4.843A13.154 13.154 0 0 0 11.48.987 7.284 7.284 0 0 0 8.145 0a6.436 6.436 0 0 0-2.892.6l.848.848A5.691 5.691 0 0 1 7.894 1.1a5.788 5.788 0 0 1 2.583.617A11.437 11.437 0 0 1 14.063 4.5c.193.212.347.424.54.636a.209.209 0 0 1 .019.289 17.151 17.151 0 0 1-4.627 3.6l.79.79a21.4 21.4 0 0 0 4.973-4.067.658.658 0 0 0-.018-.905Z"/>
            <g transform="translate(4.952 1.963)" style={{"stroke": "#005699", "fill": "none"}}>
                <circle cx="3" cy="3" r="3" style={{"stroke": "none"}}/>
                <circle cx="3" cy="3" r="2.5"/>
            </g>
        </SvgIcon>
    )
}

export const FolderIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 17.504 14.812">
            <path d="M15.484 14.812H2.02a.675.675 0 0 1-.666-.578L.007 4.809a.674.674 0 0 1 .665-.769h.673V.673A.674.674 0 0 1 2.02 0h4.039a.676.676 0 0 1 .373.113l1.85 1.233h7.2a.674.674 0 0 1 .673.673v2.02h.673a.675.675 0 0 1 .667.769l-1.346 9.426a.677.677 0 0 1-.665.578ZM1.449 5.387 2.6 13.466h12.3l1.154-8.079Zm1.244-4.04v2.692h12.118V2.693H8.078A.677.677 0 0 1 7.7 2.58L5.855 1.346Z"/>
        </SvgIcon>
    )
}

export const InfoIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="2 2 20 20">
            <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </SvgIcon>
    )
}

export const LockIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 12.727 15.636">
            <path d="M10.727 15.636H2a2 2 0 0 1-2-2V7.454a2 2 0 0 1 2-2h8.727a2 2 0 0 1 2 2v6.182a2 2 0 0 1-2 2ZM2 6.545a.91.91 0 0 0-.909.909v6.182a.91.91 0 0 0 .909.909h8.727a.908.908 0 0 0 .909-.909V7.454a.908.908 0 0 0-.909-.909Z"/>
            <path d="M10.363 6.546h-8A.546.546 0 0 1 1.818 6V4.181a4.048 4.048 0 0 1 1.35-2.974A4.73 4.73 0 0 1 6.364 0a4.729 4.729 0 0 1 3.195 1.207 4.048 4.048 0 0 1 1.35 2.974V6a.546.546 0 0 1-.546.546Zm-4-5.455a3.645 3.645 0 0 0-2.462.923 2.918 2.918 0 0 0-.993 2.167v1.274h6.91V4.181a2.918 2.918 0 0 0-.993-2.167 3.644 3.644 0 0 0-2.461-.923ZM6.363 11.272a1.636 1.636 0 1 1 1.636-1.636 1.638 1.638 0 0 1-1.636 1.636Zm0-2.182a.545.545 0 1 0 .545.545.546.546 0 0 0-.545-.544Z"/>
            <path d="M5.818 10.727v1.819a.5455.5455 0 1 0 1.091 0v-1.819a.5455.5455 0 0 0-1.091 0Z"/>
        </SvgIcon>
    )
}

export const MicroInBubbleIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 25 25">
            <g transform="translate(-2 -2)">
                <g transform="translate(2 2)">
                    <path d="M23.375,5.625A12.372,12.372,0,0,0,14.5,2,12.379,12.379,0,0,0,2,14.5,12.379,12.379,0,0,0,14.5,27H27V14.5A12.372,12.372,0,0,0,23.375,5.625ZM25.25,25.25H14.5a11,11,0,0,1-7.625-3.125A10.781,10.781,0,0,1,3.75,14.5,11,11,0,0,1,6.875,6.875a10.865,10.865,0,0,1,15.25,0A10.781,10.781,0,0,1,25.25,14.5Z" transform="translate(-2 -2)"/>
                    <path d="M16.6,10.35a.649.649,0,0,0-.25.5V12.6a3.125,3.125,0,0,1-6.25,0V10.85a.948.948,0,0,0-.25-.5.649.649,0,0,0-.5-.25h0a.649.649,0,0,0-.5.25.649.649,0,0,0-.25.5V12.6a4.563,4.563,0,0,0,3.875,4.5v.625H11.35a.625.625,0,0,0,0,1.25h3.5a.625.625,0,0,0,0-1.25H13.725V17.1A4.68,4.68,0,0,0,17.6,12.6V10.85a.948.948,0,0,0-.25-.5A.564.564,0,0,0,16.6,10.35Zm-7.25.125Z" transform="translate(-0.35 0.025)"/>
                </g>
                <g transform="translate(12.625 8.5)">
                    <path d="M12.75,15.575a2.241,2.241,0,0,1-2.25-2.25V9.45a2.25,2.25,0,0,1,4.5,0v4A2.138,2.138,0,0,1,12.75,15.575Zm0-6.875a.72.72,0,0,0-.75.75v4a.75.75,0,1,0,1.5,0v-4A.807.807,0,0,0,12.75,8.7Z" transform="translate(-10.5 -7.2)"/>
                </g>
            </g>
        </SvgIcon>
    )
}

export const OppositeArrowsIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 16.123 17" style={{fill:"none", stroke: "#005699", fillRule:"evenodd"}}>
            <path d="M15.623 11.025a.358.358 0 0 0-.358-.358h-8.1v-1.4a.358.358 0 0 0-.537-.31l-2.972 1.717-2.977 1.72a.358.358 0 0 0 0 .62l2.977 1.718 2.975 1.719a.358.358 0 0 0 .537-.31v-1.4h8.1a.358.358 0 0 0 .358-.358v-3.36ZM.5 2.615a.358.358 0 0 1 .358-.358h8.1v-1.4a.358.358 0 0 1 .537-.31l2.976 1.718 2.977 1.72a.358.358 0 0 1 0 .62l-2.977 1.718-2.978 1.719a.358.358 0 0 1-.537-.31v-1.4h-8.1a.358.358 0 0 1-.358-.358v-3.36Z"/>
        </SvgIcon>
    )
}

export const PaperClipIcon = (props) => {
    return(
        <SvgIcon {...props} viewBox="0 0 12.208 25.75">
            <path
                style={{ fill:"#7e7e7e", stroke:"#7e7e7e", strokeMiterlimit:10, strokeWidth:".75px" }}
                d="M5.729 25A5.736 5.736 0 0 1 0 19.271V4.167a4.167 4.167 0 0 1 8.333 0v13.541a2.6 2.6 0 0 1-5.208 0V5.7a.521.521 0 1 1 1.042 0v12.008a1.563 1.563 0 0 0 3.125 0V4.167a3.125 3.125 0 0 0-6.25 0v15.1a4.687 4.687 0 0 0 9.375 0V5.053a.521.521 0 0 1 1.042 0v14.218A5.736 5.736 0 0 1 5.729 25Z"
            />
        </SvgIcon>
    )
}

export const PenIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 14.863 14.863">
            <path d="m0 14.863.025-5.4L9.49 0l5.373 5.388-3.941 3.941-.711-.715.918-.913-3.967-3.966-6.123 6.129v3.966H5l2.959-2.958.71.715L5.4 14.838ZM9.49 1.426l-1.6 1.6 3.946 3.946 1.6-1.6L9.49 1.427Z"/>
        </SvgIcon>
    )
}

export const PersonIcon = (props) => {
    return (
    <SvgIcon {...props} viewBox="0 0 24 24">
        <g stroke="#03B9E9" strokeWidth="1.75" fill="none" fillRule="evenodd" strokeLinejoin="round">
            <path d="M17 6.5c0 2.48522308-2.0147769 4.5-4.5 4.5C10.01477692 11 8 8.98522308 8 6.5 8 4.0147769 10.01477692 2 12.5 2 14.9852231 2 17 4.0147769 17 6.5ZM3 22c0-5.5228267 4.02947764-10 9.00005436-10C16.9705224 12 21 16.4771733 21 22"/>
        </g>
    </SvgIcon>
    )
}

export const RoundCrossIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      <path d="M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8ZM8 .888A7.112 7.112 0 1 0 15.112 8 7.12 7.12 0 0 0 8 .888Z" />
      <path d="M10.837 5.167a.444.444 0 0 0-.628 0l-2.2 2.2-2.214-2.2a.44406306.44406306 0 0 0-.628.628l2.2 2.2-2.2 2.2a.44904009.44904009 0 0 0 .628.642l2.2-2.2 2.2 2.2a.4507918.4507918 0 1 0 .642-.633l-2.2-2.2 2.2-2.209a.445.445 0 0 0 0-.628Z" />
    </SvgIcon>
  );
};

export const MessageIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 14.554">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="14.554"
        viewBox="0 0 16 14.554"
      >
        <defs>
          <style>.a{"fill:#005699;"}</style>
        </defs> */}
        <g transform="translate(-3.7 -4.4)">
          <g transform="translate(3.7 4.4)">
            <g transform="translate(0 0)">
              <path
                class="a"
                d="M5.134,14.954a.869.869,0,0,1-.482-.1A1.252,1.252,0,0,1,3.881,13.7V11.773H3.3a2.614,2.614,0,0,1-2.6-2.7V3.1A2.675,2.675,0,0,1,3.3.4H14a2.635,2.635,0,0,1,2.7,2.7v5.88a2.694,2.694,0,0,1-2.7,2.7H9.086L6,14.569A1.222,1.222,0,0,1,5.134,14.954ZM3.3,1.653A1.547,1.547,0,0,0,1.76,3.292v5.88A1.585,1.585,0,0,0,3.3,10.713H5.037V13.8a.094.094,0,0,0,.1.1h.193L8.7,10.617h5.4A1.585,1.585,0,0,0,15.64,9.075V3.1A1.585,1.585,0,0,0,14.1,1.557H3.3Z"
                transform="translate(-0.7 -0.4)"
              />
            </g>
          </g>
        </g>
      {/* </svg> */}
    </SvgIcon>
  );
};

export const AudioCallIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 15.338 16">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15.338"
        height="16"
        viewBox="0 0 15.338 16"
      >
        <defs>
          <style>.a{"fill:#005699;"}</style>
        </defs> */}
        <g transform="translate(-2.404 -1.956)">
          <g transform="translate(2.404 1.956)">
            <g transform="translate(0)">
              <path
                class="a"
                d="M10.417,14.956a6.077,6.077,0,0,1-1.676-.239C4.669,13.6.359,9.049-.44,4.9A5.052,5.052,0,0,1,1.237-.37h0a2.456,2.456,0,0,1,2.075-.639A1.767,1.767,0,0,1,4.51.109a7.417,7.417,0,0,0,.4.8c.718,1.357,1.2,2.395.4,3.273h-.08l-.4.319c-1.118.718-1.118.8-.958,1.038a9.647,9.647,0,0,0,4.39,4.869c.239.16.319.16,1.038-.8.16-.16.239-.319.4-.479l.08-.08c.958-.8,1.916-.16,3.432.718l.559.319a1.849,1.849,0,0,1,.958,1.277,2.7,2.7,0,0,1-.718,2A4.721,4.721,0,0,1,10.417,14.956ZM1.875.508A3.893,3.893,0,0,0,.6,4.659c.718,3.752,4.79,7.983,8.382,9.02a3.72,3.72,0,0,0,4.151-1.038,1.254,1.254,0,0,0,.479-1.118.761.761,0,0,0-.479-.559l-.479-.319c-1.277-.8-1.756-1.038-2.075-.8a1.741,1.741,0,0,1-.319.4c-.639.8-1.357,1.756-2.475,1.118A10.6,10.6,0,0,1,2.913,6.016C2.195,4.9,3.232,4.18,4.19,3.541L4.51,3.3c.239-.319,0-.8-.639-1.916a7.417,7.417,0,0,1-.4-.8A.72.72,0,0,0,2.993.109c-.239-.08-.639.08-1.118.4Z"
                transform="translate(0.596 1.044)"
              />
            </g>
          </g>
        </g>
      {/* </svg> */}
    </SvgIcon>
  );
};

export const VideoCallIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 12">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="12"
        viewBox="0 0 16 12"
      >
        <defs>
          <style>.a{"fill:#005699;"}</style>
        </defs> */}
        <g transform="translate(-4.4 -6)">
          <g transform="translate(4.4 6)">
            <path
              class="a"
              d="M12.485,13H2.759C1.923,13,1.4,12.5,1.4,11.9V2.1A1.166,1.166,0,0,1,2.655,1H12.38a1.073,1.073,0,0,1,1.15,1.1V3.6l2.2-1.3a1.173,1.173,0,0,1,1.15,0,.993.993,0,0,1,.523.9v7.7a.842.842,0,0,1-.523.9.832.832,0,0,1-1.046-.1l-2.2-1.3v1.5A1.073,1.073,0,0,1,12.485,13ZM2.55,11.9Zm0,0H12.59V9.4c-.1-.2-.1-.3.209-.4a.485.485,0,0,1,.523,0l2.824,1.7V3.4L13.322,5A.485.485,0,0,1,12.8,5a.537.537,0,0,1-.314-.4V2.1H2.759c-.209,0-.209.1-.209.1Z"
              transform="translate(-1.4 -1)"
            />
          </g>
        </g>
      {/* </svg> */}
    </SvgIcon>
  );
};

export const ContactDetailsIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 14.647 16">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.647"
        height="16"
        viewBox="0 0 14.647 16"
      >
        <defs>
          <style>.a{"fill:#005699;"}</style>
        </defs> */}
        <path
          class="a"
          d="M11.258,9.562A3.774,3.774,0,0,0,13.965,5.9,3.79,3.79,0,0,0,10.144,2,3.871,3.871,0,0,0,8.95,9.562,7.806,7.806,0,0,0,2.9,17.443a.557.557,0,1,0,1.114,0c0-3.821,2.786-6.925,6.209-6.925s6.209,3.1,6.209,6.925a.557.557,0,0,0,1.114,0C17.388,13.463,14.681,10.119,11.258,9.562ZM7.278,5.9a2.866,2.866,0,1,1,5.731,0,2.787,2.787,0,0,1-2.866,2.786A2.838,2.838,0,0,1,7.278,5.9Z"
          transform="translate(-2.9 -2)"
        />
      {/* </svg> */}
    </SvgIcon>
  );
};

export const BlockContactIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 15.52">
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.52">
        <defs>
          <style>.a{"fill:#005699;"}</style>
        </defs> */}
        <g transform="translate(-2 -2.3)">
          <path
            class="a"
            d="M15.88,11.5a4.08,4.08,0,1,0,4.08,4.08A4.1,4.1,0,0,0,15.88,11.5Zm0,.96a3.282,3.282,0,0,1,1.76.56l-4.48,4a3.309,3.309,0,0,1-.4-1.52A3.22,3.22,0,0,1,15.88,12.46Zm0,6.24a3.091,3.091,0,0,1-2.16-.88l4.56-4.08a2.852,2.852,0,0,1,.64,1.84A3.007,3.007,0,0,1,15.88,18.7Z"
            transform="translate(-1.96 -1.84)"
          />
          <path
            class="a"
            d="M12,10.94l.56-.32A6.445,6.445,0,0,0,9.92,9.5a3.626,3.626,0,0,0,2.56-3.52A3.555,3.555,0,0,0,8.88,2.3,3.735,3.735,0,0,0,7.76,9.58,7.327,7.327,0,0,0,2,17.02a.547.547,0,0,0,.56.56.547.547,0,0,0,.56-.56c0-3.6,2.64-6.56,5.92-6.56a5.3,5.3,0,0,1,2.88.88A.971.971,0,0,1,12,10.94ZM8.88,8.7A2.68,2.68,0,1,1,11.6,6.06,2.631,2.631,0,0,1,8.88,8.7Z"
          />
        </g>
      {/* </svg> */}
    </SvgIcon>
  );
};

export const RemoveContactIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 16 16">
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <defs>
          <style>.a{"fill:#005699;"}</style>
        </defs> */}
        <g transform="translate(-2 -2)">
          <g transform="translate(2 2)">
            <path
              class="a"
              d="M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,1.04a6.5,6.5,0,0,1,4.48,1.68L2.72,12.48A6.9,6.9,0,0,1,1.68,5.12,7.081,7.081,0,0,1,8,1.04ZM8,14.96a7.274,7.274,0,0,1-4.56-1.68l9.84-9.76a6.9,6.9,0,0,1,1.04,7.36A7.032,7.032,0,0,1,8,14.96Z"
            />
          </g>
        </g>
      {/* </svg> */}
    </SvgIcon>
  );
};
export const RoundSaltireIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 16 16">
            <path d="M8 16a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8ZM8 .888A7.112 7.112 0 1 0 15.112 8 7.12 7.12 0 0 0 8 .888Z"/>
            <path d="M10.837 5.167a.444.444 0 0 0-.628 0l-2.2 2.2-2.214-2.2a.44406306.44406306 0 0 0-.628.628l2.2 2.2-2.2 2.2a.44904009.44904009 0 0 0 .628.642l2.2-2.2 2.2 2.2a.4507918.4507918 0 1 0 .642-.633l-2.2-2.2 2.2-2.209a.445.445 0 0 0 0-.628Z"/>
        </SvgIcon>
    )
}

export const TrashBinIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 15.44 16">
            <path d="M17.2 4.08h-4.72v-.32A1.776 1.776 0 0 0 10.72 2H9.44a1.776 1.776 0 0 0-1.76 1.76V4H2.96a.56.56 0 1 0 0 1.12h1.12l.56 11.04A1.879 1.879 0 0 0 6.56 18h7.12a1.879 1.879 0 0 0 1.92-1.84l.56-11.04h1.12a.547.547 0 0 0 .56-.56c0-.32-.32-.48-.64-.48Zm-8.48 0v-.32a.631.631 0 0 1 .64-.64h1.28a.631.631 0 0 1 .64.64V4H8.72Zm6.24 1.04-.56 10.96a.8.8 0 0 1-.8.8H6.56a.756.756 0 0 1-.8-.8L5.12 5.12Z" transform="translate(-2.4 -2)"/>
        </SvgIcon>
    )
}

export const TwoSheetsIcon = (props) => {
    return (
        <SvgIcon {...props} viewBox="0 0 16 15.68">
            <path d="M16.72 2.2H7.2a1.264 1.264 0 0 0-1.28 1.28V5.8H3.28A1.264 1.264 0 0 0 2 7.08v9.52a1.264 1.264 0 0 0 1.28 1.28h9.52a1.264 1.264 0 0 0 1.28-1.28v-2.32h2.64A1.264 1.264 0 0 0 18 13V3.48a1.264 1.264 0 0 0-1.28-1.28Zm-3.68 14.4a.212.212 0 0 1-.24.24H3.28a.212.212 0 0 1-.24-.24V7.08a.255.255 0 0 1 .24-.24h9.52a.212.212 0 0 1 .24.24Zm3.92-3.6a.212.212 0 0 1-.24.24h-2.64V7.08A1.264 1.264 0 0 0 12.8 5.8H6.96V3.48a.212.212 0 0 1 .24-.24h9.52a.212.212 0 0 1 .24.24V13Z" transform="translate(-2 -2.2)"/>
        </SvgIcon>
    )
}
