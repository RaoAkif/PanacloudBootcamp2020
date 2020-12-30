import React, { useEffect } from "react";
import "./main.css";
import useWebAnimations from "@wellyshen/use-web-animations";

export const RedQueenRace = () => {

  let playbackrateRQ = 1;
  let playbackrateBG = 0;
  
    /* Background animations */
  const sceneryFrames =   [
                            { transform: 'translateX(100%)' },
                            { transform: 'translateX(-100%)' }   
                          ];

  const sceneryTimingBackground = {
                                    duration: 36000,
                                    iterations: Infinity
                                  };

  const sceneryTimingForeground = {
                                    duration: 12000,
                                    iterations: Infinity
                                  };

  // var background1Movement = background1.animate(sceneryFrames, sceneryTimingBackground);
  // var background2Movement = background2.animate(sceneryFrames, sceneryTimingBackground);
  const background1Movement = useWebAnimations({ keyframes: sceneryFrames, timing: sceneryTimingBackground });
  const background2Movement = useWebAnimations({ keyframes: sceneryFrames, timing: sceneryTimingBackground });
  // var foreground1Movement = foreground1.animate(sceneryFrames, sceneryTimingForeground);
  // var foreground2Movement = foreground2.animate(sceneryFrames, sceneryTimingForeground);
  const foreground1Movement = useWebAnimations({keyframes: sceneryFrames, timing: sceneryTimingForeground });
	const foreground2Movement = useWebAnimations({ keyframes: sceneryFrames, timing: sceneryTimingForeground });
  // var spriteFrames = [
  //                     { transform: 'translateY(0)' },
  //                     { transform: 'translateY(-100%)' }   
  //                   ];
  const spriteFrames = [
                        { transform: 'translateY(0)' },
                        { transform: 'translateY(-100%)' }   
                      ];
                      // var redQueen_alice = redQueen_alice_sprite.animate(
                      //                                                     spriteFrames, {
                      //                                                     easing: 'steps(7, end)',
                      //                                                     direction: "reverse",
                      //                                                     duration: 600,
                      //                                                     playbackRate: 1,
                      //                                                     iterations: Infinity
                      //                                                   });
  const spirteTiming = {
                        easing: "steps(7, end)",
                        direction: "reverse",
                        duration: 600,
                        playbackRate: playbackrateRQ,
                        iterations: Infinity,
                      };
  const redQueen_alice = useWebAnimations({ keyframes: spriteFrames, timing: spirteTiming });
  // /* Alice tires so easily! 
  //   Every so many seconds, reduce their playback rate so they slow a little.      */

  // var sceneries = [foreground1Movement, foreground2Movement, background1Movement, background2Movement];

  // var adjustBackgroundPlayback = function() {
  //   if (redQueen_alice.playbackRate < .8) {
  //     sceneries.forEach(function(anim) {
  //       anim.playbackRate = redQueen_alice.playbackRate/2 * -1;
  //     });
  //   } else if (redQueen_alice.playbackRate > 1.2) {
  //     sceneries.forEach(function(anim) {
  //       anim.playbackRate = redQueen_alice.playbackRate/2;
  //     });
  //   } else {
  //     sceneries.forEach(function(anim) {
  //       anim.playbackRate = 0;    
  //     });
  //   }   
  // }
  // adjustBackgroundPlayback();

  const adjustBackgroundPlayback = () => {
    if (playbackrateRQ < 0.8) {
      playbackrateBG = (playbackrateRQ / 2) * -1;
    } else if (playbackrateRQ > 1.2) {
      playbackrateBG = playbackrateRQ / 2;
    } else {
      playbackrateBG = 0;
    }
foreground1Movement.getAnimation().playbackRate = playbackrateBG;
foreground2Movement.getAnimation().playbackRate = playbackrateBG;
background1Movement.getAnimation().playbackRate = playbackrateBG;
background2Movement.getAnimation().playbackRate = playbackrateBG;
};
// setInterval( function() {
//   /* Set decay */
//   if (redQueen_alice.playbackRate > .4) {
//     redQueen_alice.playbackRate *= .9;    
//   } 
//   adjustBackgroundPlayback();
// }, 3000);
// var background1 = document.getElementById('background1');
// var background2 = document.getElementById('background2');
// var foreground1 = document.getElementById('foreground1');
// var foreground2 = document.getElementById('foreground2');

// background1Movement.currentTime = background1Movement.effect.timing.duration / 2;
// foreground1Movement.currentTime = foreground1Movement.effect.timing.duration / 2;

// var redQueen_alice_sprite = document.getElementById('red-queen_and_alice_sprite');

// adjustBackgroundPlayback();

// var goFaster = function() {
//   /* But you can speed them up by giving the screen a click or a tap. */
//   redQueen_alice.playbackRate *= 1.1;
//   adjustBackgroundPlayback();
// }

// document.addEventListener("click", goFaster);
// document.addEventListener("touchstart", goFaster);
useEffect(() => {
  const fganimation = foreground1Movement.getAnimation();
  fganimation.currentTime = fganimation.effect.getTiming().duration / 2;

  const bganimation = background1Movement.getAnimation();
  bganimation.currentTime = bganimation.effect.getTiming().duration / 2;

  setInterval(() => {
    /* Set decay */
    if (playbackrateRQ > 0.4) {
      playbackrateRQ *= 0.9;
      redQueen_alice.getAnimation().playbackRate = playbackrateRQ;
    }
    adjustBackgroundPlayback();
  }, 3000);

  document.addEventListener("click", () => {
    playbackrateRQ *= 1.1;
    redQueen_alice.getAnimation().playbackRate = playbackrateRQ;
    adjustBackgroundPlayback();
  });
});





  return (
    <div>
      <div className="wrapper">
        <div className="sky"></div>
        <div className="earth">
          <div id="red-queen_and_alice">
            <img
              id="red-queen_and_alice_sprite"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
              srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
              alt="Alice and the Red Queen running to stay in place."
              ref={redQueen_alice.ref}
            />
          </div>
        </div>

        <div className="scenery" id="foreground1" ref={foreground1Movement.ref}>
          <img
            id="palm3"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
            alt=" "
          />
        </div>
        <div className="scenery" id="foreground2" ref={foreground2Movement.ref}>
          <img
            id="bush"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
            alt=" "
          />
          <img
            id="w_rook_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
            alt=" "
          />
        </div>
        <div className="scenery" id="background1" ref={background1Movement.ref}>
          <img
            id="r_pawn_upright"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
            alt=" "
          />
          <img
            id="w_rook"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
            alt=" "
          />
          <img
            id="palm1"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
            alt=" "
          />
        </div>
        <div className="scenery" id="background2" ref={background2Movement.ref}>
          <img
            id="r_pawn"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
            alt=" "
          />

          <img
            id="r_knight"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
            alt=" "
          />
          <img
            id="palm2"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
            srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
            alt=" "
          />
        </div>
      </div>
    </div>
  );
};