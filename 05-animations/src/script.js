import * as THREE from 'three'
import gsap from 'gsap'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


// request animation frame. l suo scopo è chiamare una funzione sul prossimo fotogramma

let time = Date.now();

// Animations

const tick = () => {

    /* Time: questo ci serve per staccare l'animazione dal framerate  */

    /* prendo il tempo a ogni cambio di framerate */
    const currenTime = Date.now();
    /* calcolo il delta fra il tempo preso in questa iterazione e il tempo che ho calcolato all'esterno */
    const deltaTime =  currenTime - time
    /* updato il time esterno */
    time = currenTime

    /*

    All’inizio della scena salvo l’ora.
    A ogni fotogramma leggo l’ora attuale.
    Faccio la differenza tra l’ora attuale e quella dell’ultimo fotogramma: ottengo deltaTime, cioè quanto tempo è passato.
    Aggiorno l’ora salvata, così sarà pronta per il fotogramma successivo.
    Uso deltaTime per calcolare quanto deve muoversi l’oggetto in quel tempo.

    è come un segnalibro sull’orologio:
    salvo 0 ms → dopo leggo 16 ms → sono passati 16 ms
    salvo 16 ms → dopo leggo 32 ms → sono passati 16 ms

    A ogni fotogramma sposto il segnalibro e uso il tempo passato per decidere quanto ruotare l’oggetto. Per ora basta ricordare questo.

    */

    /* update objects */

    mesh.rotation.x += 0.0002 * deltaTime

    /* il render lo sposto qui */

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick)

    /*il problema di questo setup è che il framerate non è uguale fra pc e pc per questo usiamo il timestamp*/

}

/* clock  */

const clock = new THREE.Clock()

const tick2 = () => {

    // clock

    const elapsedTime = clock.getElapsedTime()

    /* update objects qui non aggiungo, qui semplicemente eguaglio */

    // mesh.rotation.y = elapsedTime * Math.PI * 2 // 1 revolution per second
    
    // mesh.position.y = Math.sin(elapsedTime)
    // mesh.position.x = Math.cos(elapsedTime)

    // camera position

    camera.position.y = Math.sin(elapsedTime)
    camera.position.x = Math.cos(elapsedTime)

    camera.lookAt(mesh.position)

    /* il render lo sposto qui */

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick2)

    /*il problema di questo setup è che il framerate non è uguale fra pc e pc per questo usiamo il timestamp*/

}


gsap.to(mesh.position, { duration:1, delay:1, y: 1 })
gsap.to(mesh.position, { duration:1, delay:2, z: 1 })
gsap.to(mesh.position, { duration:1, delay:3, x: 1 })
gsap.to(mesh.position, { duration:1, delay:4, y: -1 })
gsap.to(mesh.position, { duration:1, delay:5, z: -1 })
gsap.to(mesh.position, { duration:1, delay:6, x: -1 })

const tick3 = () => {

   
    // camera.lookAt(mesh.position)

    /* il render lo sposto qui */

    renderer.render(scene, camera)

    window.requestAnimationFrame(tick3)

    /*il problema di questo setup è che il framerate non è uguale fra pc e pc per questo usiamo il timestamp*/

}


tick3()

