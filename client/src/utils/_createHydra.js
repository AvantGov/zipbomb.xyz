//depends 
import Hydra from 'hydra-synth';
// import { _renderAudio } from './_renderAudio';
// import { _renderAnalysis } from './_renderAudio';

export const _createHydra = (context) => {

    var controller = {
      connected: false,
    }

    const getResoHeight = () => {
        const height = window.innerHeight
        if (height > 1080) {
          return height
        } else {
          return 1080
        }
    }

    const getResoWidth = () => {
      const width = window.innerWidth;
      if (width > 1920) {
        return width
      } else {
        return 1920
      }
    }

    var canvas = document.createElement("canvas")
    canvas.id = "canvas1"
    const hydra = new Hydra({
      detectAudio: false,
      canvas: canvas,
      makeGlobal: false
    }).synth
    hydra.setResolution(getResoWidth(),getResoHeight())
    hydra.fps = 30
    // console.log("hydra:",hydra)
    hydra.shape(1,1).rotate(1,0.5).color(.9,2.43,1.05).mult(hydra.voronoi(1000,0.25).blend(hydra.o0).luma()).out()

    return canvas
}

