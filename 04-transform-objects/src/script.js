import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

/* gruppo */

const group = new THREE.Group()

scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry( 1 , 1 , 1 ),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry( 1 , 1 , 1 ),
    new THREE.MeshBasicMaterial({color: 0xff0025})
)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry( 1 , 1 , 1 ),
    new THREE.MeshBasicMaterial({color: 0xff4500})
)

cube2.position.x = -1.2;
cube3.position.x = 1.2;


group.add(cube1,cube2,cube3)

/* group position */
/*
group.position.x = 0.7
group.position.y = -0.6
group.position.z = -1
*/
/* position set */
/*
group.position.set( 2 , 2 , 2 )
*/

/* normalize */

// group.position.normalize()

/* scale */
/*
group.scale.set( 2 , 1 , 1 ) 
*/
/* rotation */
/* rotation o quaternion */
/* rotazione basata su pi greco! Un pi greco è mezza rotazione!!!! */
/*
group.rotation.x = Math.PI * 0.8
group.rotation.y = Math.PI * 0.25
group.rotation.z = Math.PI * 0.25

group.rotation.reorder('YXZ')
*/
/* mesh.rotation.set ( 0 , Math.PI * 0.8 , 0 ) */

/* rotazioni sempre in ordne y x z */

/* rotation quaternion */




/* axishelper */

const axesHelper = new THREE.AxesHelper()

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

scene.add(camera)

scene.add(axesHelper)

camera.position.set( 1 , 1.2 , 6 )

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

/* come dire alla camera di guardare a un oggetto? */
/* la position è un vecror 3) per cui se diciamo alla camera di guardare alla positiondella mesh guarderà al centro di essa */

camera.lookAt(new THREE.Vector3( 1 , 2 , 2 ))
camera.lookAt(group.position)



/* scene graph */
/* è un gruppo che posso spostare con all'interno quello che voglio*/



/* Renderer has to go always last */

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)



