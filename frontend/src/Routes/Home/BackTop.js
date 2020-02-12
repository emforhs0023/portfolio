import React, { useEffect, useCallback, useState } from 'react';
import { Icon } from 'antd';
import "./BackTop.css";

const BackTop = () => {
    const [listNum, setListNum ] = useState(false)
    
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setListNum(true)
        } else {
            setListNum(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
         window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            {listNum == true && (
                <div className="scroll-to-top">
                    
                        <div onClick={() => scrollToTop()} style={{textAlign: "center"}}>
                            <Icon type="up-circle" />
                            <span className="text">
                                page
                                <br />
                                <b>top</b>
                            </span>
                        </div>
                    
                </div>
            )}
        </>
    )
}

export default BackTop

// export default class ScrollToTop extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//             is_visible: false
//         };
//   }

//   componentDidMount() {
//     var scrollComponent = this;
//     document.addEventListener("scroll", function(e) {
//       scrollComponent.toggleVisibility();
//     });
//   }

//   toggleVisibility() {
//     if (window.pageYOffset > 300) {
//             this.setState({
//                 is_visible: true
//             })
//         } else {
//             this.setState({
//                 is_visible: false
//             });
//         }
//   }

//     scrollToTop() {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     }

//     render() {
//         const { is_visible } = this.state;
//         return (
//             <div className="scroll-to-top">
//                 {is_visible && (
//                     <div onClick={() => this.scrollToTop()}>
//                         <span className="text">
//                             page
//                             <br />
//                             <b>top</b>
//                         </span>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }
