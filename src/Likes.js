import React, { useState } from "react";
import cn from "classnames";
import Table from 'react-bootstrap/Table'
import { ReactComponent as Hand } from "./hand.svg";
import "./styles.scss"


const LikeButton = (props) => {  
  const [liked, setLiked] = useState(null);  
  const [clicked, setClicked] = useState(false);  
  const particleList = Array.from(Array(10)) 
  
  return (
    <Table>
        <tbody>
            <tr>
                <td>
                    <button
                    onClick={() => {
                        setLiked(!liked);
                        setClicked(true);                                              
                        props.changeLikes(props.postID)
                                               
                    }}
                    onAnimationEnd={() => setClicked(false)}
                    className={cn("like-button-wrapper", {
                        liked,
                        clicked,
                    })}
                    >
                    {liked && (
                        <div className="particles">
                        {particleList.map((_, index) => (
                            <div
                            className="particle-rotate"
                            style={{
                                transform: `rotate(${
                                (360 / particleList.length) * index + 1
                                }deg)`,
                            }}
                            >
                            <div className="particle-tick" />
                            </div>
                        ))}
                        </div>
                    )}
                    <div className="like-button">
                        <Hand />
                        <span>Like</span>
                        <span className={cn("suffix", { liked })}>d</span>
                    </div>
                    </button>
                </td>
                <td className="likecount">
                    {props.likes}
                </td>
            </tr>
        </tbody>
    </Table>
   
  );
};

export default LikeButton;