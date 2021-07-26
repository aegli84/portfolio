import styled from 'styled-components'
import { motion } from 'framer-motion'

const Curly = () => {
    return (
        <CurlySvg 
            viewBox="0 0 1025 285" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            >
        <motion.path 
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 1.6 }}
            d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
            stroke="#D96ED4"
            strokeOpacity="0.4"
            strokeWidth="13"
            />
        </CurlySvg>
    )
}

const CurlySvg = styled.svg `
    position: absolute;
    height: 95vh;
    margin-top: -10vh;
    width: 100vw;
    z-index: -1;
    left: 0;

@media (max-width: 768px){
    height: 88vh;
    width: 100vw; 
    padding-bottom: 10vh;
    }
@media (max-width: 480px){
    height: 90vh;
    width: 100vw; 
    
    }
`
export default Curly;