// Drawing Mesh

var old_Smile_dis = 0;
var new_Smile_dis = 0;
export const drawMesh = (predictions, ctx) => {
  if (predictions.length > 0) {
    predictions.forEach((prediction) => {
      const keypoints = prediction.scaledMesh;

      var a;
      var b;
      var c;

      var RightEye_Y = 0;
      var LeftEye_Y = 0;

      var Head_Y = 0;
      var Nose_Y = 0;

      var lipsPointLeft_Y = 0;
      var lipsPointRight_Y = 0;
      var lipsPointCenter_Y = 0;

      var cheeksPointRight_Y = 0;
      var cheeksPointLeft_Y = 0;

      // Draw Dots
      for (let i = 0; i < keypoints.length; i++) {
        // console.log("KEYPOINTS", keypoints);
        const x = keypoints[i][0];
        const y = keypoints[i][1];
        // console.log("xy", x, "\n", y);

        // if (
        //   i == 473 ||
        //   i == 474 ||
        //   i == 476 ||
        //   i == 475 ||
        //   i == 477 ||
        //   i == 469 ||
        //   i == 468 ||
        //   i == 471 ||
        //   i == 472 ||
        //   i == 470
        // ) {
        //   ctx.beginPath();
        //   ctx.arc(x, y, 2, 0, 3 * Math.PI);
        //   ctx.fillStyle = "red";

        //   ctx.fill();
        // }

        if (i == 473) {
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, 3 * Math.PI);
          ctx.fillStyle = "red";
          ctx.fill();

          RightEye_Y = y;
        }

        if (i == 468) {
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, 3 * Math.PI);
          ctx.fillStyle = "yellow";

          ctx.fill();

          LeftEye_Y = y;
        }

        //LIPS POINT RIGHT
        if (i == 61) {
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 3 * Math.PI);
          ctx.fillStyle = "green";
          ctx.fill();

          lipsPointRight_Y = y;

          a = Math.round(x - y);
          a = Math.abs(a);
          // console.log("a:", a);
        }

        // LIPS POINT LEFT
        if (i == 291) {
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 3 * Math.PI);
          ctx.fillStyle = "#ffffff";
          ctx.fill();

          lipsPointLeft_Y = y;

          b = Math.round(x - y);
          b = Math.abs(b);

          // console.log(("b: ", b));
        }

        // NOSE POINT
        if (i == 5) {
          c = Math.round(x - y);
          c = Math.abs(c);

          Nose_Y = y;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 3 * Math.PI);
          ctx.fillStyle = "#ffffff";
          ctx.fill();
        }

        if (i == 9) {
          c = Math.round(x - y);
          c = Math.abs(c);

          Head_Y = y;

          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 3 * Math.PI);
          ctx.fillStyle = "pink";
          ctx.fill();
        }

        //RIGHT cheeks
        if (i == 117) {
          cheeksPointRight_Y = y;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 3 * Math.PI);
          ctx.fillStyle = "BLUE";
          ctx.fill();
        }

        //LEFT cheeks
        if (i == 280) {
          cheeksPointLeft_Y = y;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 3 * Math.PI);
          ctx.fillStyle = "black";
          ctx.fill();
        }

        if (i == 2) {
          lipsPointCenter_Y = y;
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 3 * Math.PI);
          ctx.fillStyle = "purple";
          ctx.fill();
        }

        // PRINTING ALL POINTS
        // to get the keypoints
        // ctx.beginPath();
        // ctx.arc(x, y, 1, 0, 3 * Math.PI);

        // ctx.font = "8px Arial";
        // ctx.fillText(`${i}`, x, y);
        // ctx.fillStyle = "#ffffff";

        // ctx.fill();
      }

      //console.log("a:", a, "\n b:", b, "\n c:", c);

      // const con1 = a * a === b * b + c * c;
      // const con2 = b * b === a * a + c * c;
      // const con3 = c * c === a * a + b * b;

      // console.log("con1", con1, "con2", con2, "con3", con3);
      // console.log("con1", a, "con2", b, "con3", c);

      // console.log()

      // Math.pow(side1, 2) + Math.pow(side2, 2)) == Math.pow(side3, 2)
      // console.log("a:", a);

      // console.log("b:", b);
      // console.log("distance: ", Math.sqrt(a * a + b * b));

      // new_Smile_dis = Math.sqrt(a * a + b * b);

      // if (old_Smile_dis > new_Smile_dis) {
      //   old_Smile_dis = new_Smile_dis;
      // }

      // if (old_Smile_dis == 0) {
      //   // console.log("p change the val of old_Simle");
      //   old_Smile_dis = new_Smile_dis;
      // } else {
      //   if (old_Smile_dis + 5 < new_Smile_dis) {
      //     // -1 -1
      //     // console.log("P SMILE :)");

      //     ctx.beginPath();
      //     ctx.font = "25px Arial";
      //     ctx.fillText("SMILE :) ", 250, 450);
      //     ctx.fillStyle = "#23edc8";

      //     old_Smile_dis = 0;
      //   }
      // }

      // RIGHT SIDE

      // LEFT SIDE

      // CENTER SIDE

      if (RightEye_Y > LeftEye_Y && RightEye_Y - LeftEye_Y > 35) {
        console.log("SO R");
        ctx.beginPath();
        ctx.font = "25px Arial";
        ctx.fillText(" RIGHT ", 250, 450);
        ctx.fillStyle = "#822659";
      } else if (LeftEye_Y > RightEye_Y && LeftEye_Y - RightEye_Y > 30) {
        console.log("SO L");
        ctx.beginPath();
        ctx.font = "25px Arial";
        ctx.fillText(" LEFT ", 250, 450);
        ctx.fillStyle = "#822659";
      } else if (Nose_Y < LeftEye_Y && LeftEye_Y - Nose_Y > -5) {
        console.log("SO T");

        ctx.beginPath();
        ctx.font = "25px Arial";
        ctx.fillText(" TOP ", 250, 450);
        ctx.fillStyle = "#822659";
      } else if (LeftEye_Y - Head_Y < 8) {
        console.log("SO B");
        ctx.beginPath();
        ctx.font = "25px Arial";
        ctx.fillText(" BOTTOM ", 250, 450);
        ctx.fillStyle = "#822659";
      } else if (
        lipsPointLeft_Y - lipsPointCenter_Y <= 13 &&
        lipsPointRight_Y - cheeksPointRight_Y <= 65 &&
        lipsPointLeft_Y - cheeksPointLeft_Y < 43
      ) {
        ctx.beginPath();
        ctx.font = "25px Arial";
        ctx.fillText(" SMILE ", 250, 450);
        ctx.fillStyle = "#822659";
      } else {
        ctx.beginPath();
        ctx.font = "25px Arial";
        ctx.fillText(" CENTER ", 250, 450);
        ctx.fillStyle = "#822659";
      }

      console.log("sub", lipsPointRight_Y - cheeksPointRight_Y);

      // console.log("SUB :", cheeksPointRight_Y - RightEye_Y);

      // console.log("so LIPS L : ", lipsPointLeft_Y);
      // console.log("so CHEEKS L:", cheeksPointLeft_Y);

      // console.log("eye RightEye_Y: ", RightEye_Y);
      //  /   console.log("COMP eye LeftEye_Y: ", LeftEye_Y);

      // console.log("COMP HEAD", Head_Y);

      // console.log("SID", LeftEye_Y - Nose_Y);

      // console.log("SID", LeftEye_Y - Head_Y);

      // console.log("LIPS LEFT  POINT:", lipsPointLeft_Y);

      // console.log("LIPS RIGHT  POINT:", RightEye_Y);

      // if (LeftEye_Y > 0.87 && RightEye_Y > 0.87) {
      //   // console.log("leftEye :", poses[0].pose['leftEye'].y, " \nRightEye : ", poses[0].pose['rightEye'].y)
      //   if (LeftEye_Y > RightEye_Y) {
      //     if (LeftEye_Y - RightEye_Y > 40) {
      //       // console.log("Left Side");
      //       ctx.beginPath();
      //       ctx.font = "25px Arial";
      //       ctx.fillText(" LEFT ", 250, 450);
      //       ctx.fillStyle = "#23edc8";
      //     }
      //   } else if (RightEye_Y > LeftEye_Y) {
      //     // console.log("diff R = ", RightEye_Y - LeftEye_Y)
      //     if (RightEye_Y - LeftEye_Y > 0.007) {
      //       ctx.beginPath();
      //       ctx.font = "25px Arial";
      //       ctx.fillText(" RIGHT ", 250, 450);
      //       ctx.fillStyle = "#23edc8";
      //     }
      //   } else if (LeftEye_Y - RightEye_Y > -9 || LeftEye_Y - RightEye_Y < 9) {
      //     // console.log("Center : ", LeftEye_Y.position.y - RightEye_Y)
      //     ctx.beginPath();
      //     ctx.font = "25px Arial";
      //     ctx.fillText(" CENTER ", 250, 450);
      //     ctx.fillStyle = "#23edc8";
      //   }
      // }
    });
  }
};
