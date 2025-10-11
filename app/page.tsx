import React from "react";
import GradientBlinds from "./elements/GradientBlinds";
import LightRays from "./elements/LightRays";

const page = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
        {/* <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        /> */}
      </div>
    </div>
  );
};

export default page;
