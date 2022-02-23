// const { data } = require("jquery");

$(document).on("mouseenter", '#coffeestart', function () {
    $("#centertext").slideUp("fast");
    $("#centertextcoffee").slideDown("slow");
});

$(document).on("mouseleave", '#coffeestart', function () {
    $("#centertextcoffee").slideUp("fast");
    $("#centertext").slideDown("slow");
});

$(document).on("mouseenter", '#bananastart', function () {
    $("#centertext").slideUp("fast");
    $("#centertextbanana").slideDown("slow");
});

$(document).on("mouseleave", '#bananastart', function () {
    $("#centertextbanana").slideUp("fast");
    $("#centertext").slideDown("slow");
});

$(document).on('change', '.custom-select', function() {
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
});
  
$(document).ready(function(){
    $('.custom-select').trigger('change');
});

var dataReload = document.querySelectorAll("[data-reload]");

var language = {
    eng: {
        homeh1: "ToPRobot: Open source agricultural automation",
        homeh2: "Finding solutions for local, community focused technology and products.",
        coffeeli1: "Automated coffee harvesting with computer vision",
        coffeeli2:"Affordable, recycled components",
        coffeeli3:"Enabling local manufacturing for small farms",
        bananali1:"Organic and delicious banana bread",
        bananali2:"Using local ingredients from farms in the community",
        bananali3:"Available for local purchase!",
        h4qn: "Who are we?",
        h4asw: "We are a small family team with a variety of STEM backgrounds, from imaging to engineering. We are exploring several projects for ethical, environmentally friendly production that we plan to make available for community based, open source use.",
        coffeep1:"Our goal is to provide an alternative solution to the problems affecting the Puerto Rican coffee industry by developing a toolbox of autonomous land management tools, harvesters, processing machinery, and computer vision specialized for shade-grown coffee that could be distributed on the basis of low-cost “open source” hardware with recycled materials and open-source software. This would allow hardware production to be based primarily in Puerto Rico, allowing for community-oriented ownership and productive, on-island industries, stimulating the local economy and nurturing a historically significant crop that the island takes great pride in.",
        coffeep2:"Navigation is a crucial aspect of any autonomous technology in the field, whether it is land management or harvesting. We are in the process of developing computer vision software capable of identifying coffee and other integral parts of the landscape (tree branches, leaves, tree trunks, etc). This would enable autonomous harvesters and autonomous land management robots to not only locate coffee cherries, but also find their way around the coffee farm.",
        coffeep3:"Using our computer vision algorithm, we plan to embark on a few attempts at an autonomous harvester. We hope to start with a handheld harvester for difficult to reach coffee, then eventually move towards an autonomous arm mounted on a chassis. We plan to look into recycled, reused and ecofriendly design options for the arm that would keep it affordable for the individual farmer.",
        coffeep4:"As part of our eventual goal of a harvester, we plan to start work on a land management robot. Using a previously commissioned chassis, we plan to prototype and field test an autonomous land management robot. We plan to develop this as a field robot which uses the coffee trees as landmarks in order to navigate the field. This will keep coffee clear of invasive weeds such as kudzu, while also preparing a potential chassis for a harvester.",
        coffeep5:"Our chassis, seen above, was designed with the generous support and work of Tank Chain, who designed the chassis to be modular, affordable and reliable for small developers.",
        coffeep6:"We also plan to use our computer vision to focus on individual harvested cherries, and plan to use image processing and color selective algorithms to distinguish sufficiently ripe, healthy coffee from green and damaged coffee, creating a scalable automatic sorter that would make it far easier for farmers to separate ripe coffee from green.",
        coffeep7:"As part of our goal to provide an alternative solution to the problems affecting the Puerto Rican coffee industry with our open source toolbox, we plan to augment the above solutions with several small, locally produced machinery for as many stages of production as possible. As such we plan to round our toolkit with a partially solar powered dryer for small productions and locally manufactured pulpers using recycled rubber feet, as well as larger machinery for shared community usage, pending explorations into feasibility and affordability.",
        coffeet1:"Our plan",
        coffeet2:"Computer vision",
        coffeet3:"Harvester",
        coffeet4:"Land management",
        coffeet5:"Automated sorting",
        coffeet6:"The toolkit",
        bananap1:"While cultivating our land for robotics testing field, we found that we had an abundance of bananas around every corner - more bananas than even the most voracious banana eater could eat faster than the jungle rats could take them. We began experimenting with ways to stretch out our banana consumption for a longer time, and thus discovered the potential of banana bread. ",
        bananap2:"Our banana breads started as a way to always have a good helping of banana in our lives, but they quickly became popular with neighbors and friends. We began to up our production, branching out to muffins so we could sell small portions of the banana bread, then banana biscotti for a better shelf life while maintaining traditional baking methods - no fillers and no replacements. ",
        bananap3:"As our banana bread business grows more advanced, we have also started researching how to bake them with local ingredients. Currently (in addition to using our own, wild grown, organic bananas) this means local, unprocessed cacao nibs marinated in a honey and oil mixture, but we hope to soon move towards local, homegrown vanilla, butter from women owned businesses nearby, fresh honey, and even gluten-free local flours. ",
        bananap4:"As we continue developing and experimenting, we also hope to grow our own ingredients on site. We have several cacao trees on the way and are developing our own fermentation routine for the resulting cacao. As we continue developing, we also intend to explore vanilla gardens that would allow us to use home-grown vanilla as well. ",
        bananap5:"Our banana breads are currently only available for local sale, but we hope to open online orders soon! ",
        bananat1:"Bananas",
        bananat2:"Our menu",
        bananat3:"Local ingredients",
        bananat4:"Cacao",
        donationtitle:"Donations",
        donationqn:"Why do we need donations?",
        donationp:"Our mission statement is to create technology that can be owned and produced by local farmers. We're a small family team covering the costs of prototyping and development out of pocket - no big investors, no plans to sell our tech at a high cost. Every bit of donation lets us devote more time and materials to putting tech on the market for small farms and co-op ownership."
    },
    es:{
        homeh1: "ToPRobot: Automatización agrícola de código abierto",
        homeh2: "Encontrar soluciones para la tecnología y los productos locales, centrados en la comunidad",
        coffeeli1: "Recolección automatizada de café con visión por ordenador",
        coffeeli2: "Componentes asequibles y reciclados",
        coffeeli3: "Facilitar la fabricación local para las pequeñas explotaciones",
        bananali1: "Pan de plátano orgánico y delicioso",
        bananali2: "Utilizar ingredientes locales de las granjas de la comunidad",
        bananali3: "¡Disponible para la compra local!",
        h4qn: "¿Quiénes somos?",
        h4asw: "Somos un pequeño equipo familiar con una gran variedad de conocimientos STEM, desde la imagen hasta la ingeniería. Estamos explorando varios proyectos para una producción ética y respetuosa con el medio ambiente que pensamos poner a disposición de la comunidad para su uso en código abierto",
        coffeep1: "Nuestro objetivo es proporcionar una solución alternativa a los problemas que afectan a la industria del café de Puerto Rico mediante el desarrollo de una caja de herramientas de gestión autónoma de la tierra, cosechadoras, maquinaria de procesamiento y visión por ordenador especializada para el café cultivado a la sombra que podría ser distribuida sobre la base de hardware de 'código abierto' de bajo costo con materiales reciclados y software de código abierto. Esto permitiría que la producción de hardware se basara principalmente en Puerto Rico, permitiendo la propiedad orientada a la comunidad y las industrias productivas en la isla, estimulando la economía local y alimentando un cultivo históricamente significativo del que la isla se siente muy orgullosa",
        coffeep2: "La navegación es un aspecto crucial de cualquier tecnología autónoma en el campo, ya sea la gestión de la tierra o la cosecha. Estamos desarrollando un software de visión por ordenador capaz de identificar el café y otras partes integrantes del paisaje (ramas de los árboles, hojas, troncos, etc.). Esto permitiría a las cosechadoras autónomas y a los robots autónomos de gestión del terreno no sólo localizar las cerezas del café, sino también orientarse en la finca cafetera",
        coffeep3: "Utilizando nuestro algoritmo de visión por ordenador, planeamos embarcarnos en algunos intentos de cosechadora autónoma. Esperamos empezar con una cosechadora manual para el café de difícil acceso, y luego avanzar hacia un brazo autónomo montado en un chasis. Tenemos previsto buscar opciones de diseño reciclado, reutilizado y ecológico para el brazo que lo mantenga asequible para el agricultor individual",
        coffeep4: "Como parte de nuestro objetivo final de una cosechadora, tenemos previsto empezar a trabajar en un robot de gestión de tierras. Utilizando un chasis previamente encargado, planeamos crear un prototipo y probar sobre el terreno un robot autónomo de gestión de tierras. Tenemos previsto desarrollarlo como un robot de campo que utilice los cafetos como puntos de referencia para navegar por el campo. Esto mantendrá el café libre de malas hierbas invasoras como el kudzu, a la vez que preparará un chasis potencial para una cosechadora",
        coffeep5: "Nuestro chasis, que se ve arriba, fue diseñado con el generoso apoyo y trabajo de Tank Chain, que diseñó el chasis para que fuera modular, asequible y fiable para los pequeños desarrolladores",
        coffeep6: "También planeamos utilizar nuestra visión por ordenador para centrarnos en las cerezas individuales cosechadas, y planeamos utilizar algoritmos de procesamiento de imágenes y de selección de colores para distinguir el café suficientemente maduro y sano del café verde y dañado, creando un clasificador automático escalable que facilitaría enormemente a los agricultores la separación del café maduro del verde",
        coffeep7: "Como parte de nuestro objetivo de proporcionar una solución alternativa a los problemas que afectan a la industria del café de Puerto Rico con nuestra caja de herramientas de código abierto, planeamos aumentar las soluciones anteriores con varias maquinarias pequeñas, producidas localmente para tantas etapas de producción como sea posible. Así, planeamos completar nuestra caja de herramientas con un secador parcialmente alimentado por energía solar para pequeñas producciones y despulpadoras fabricadas localmente utilizando pies de goma reciclados, así como maquinaria más grande para uso comunitario compartido, a la espera de explorar la viabilidad y la asequibilidad",
        coffeet1: "NUESTRO PLAN",
        coffeet2: "VISIÓN INFORMATICA",
        coffeet3: "COSECHADORA",
        coffeet4: "GESTIÓN DE LA TIERRA",
        coffeet5: "CLASSIFICACIÓN AUTOMATIZADA",
        coffeet6: "EL CONJUNTO DE HERRAMIENTAS",
        coffeet1_index: "Nuestro plan",
        coffeet2_index: "Visión informática",
        coffeet3_index: "Cosechadora",
        coffeet4_index: "Gestión de la tierra",
        coffeet5_index: "Clasificación automatizada",
        coffeet6_index: "El conjunto de herramientas",
        bananap1: "Mientras cultivábamos nuestra tierra para el campo de pruebas de robótica, nos dimos cuenta de que teníamos una abundancia de plátanos a la vuelta de cada esquina - más plátanos de los que incluso el más voraz comedor de plátanos podría comer más rápido de lo que las ratas de la selva podrían tomar. Empezamos a experimentar con formas de alargar nuestro consumo de plátanos durante más tiempo, y así descubrimos el potencial del pan de plátano. ",
        bananap2: "Nuestros panes de plátano empezaron como una forma de tener siempre una buena ración de plátano en nuestras vidas, pero rápidamente se hicieron populares entre vecinos y amigos. Empezamos a aumentar nuestra producción, pasando a hacer magdalenas para poder vender pequeñas porciones de pan de plátano, y luego biscotti de plátano para mejorar su conservación, manteniendo los métodos de horneado tradicionales: sin rellenos ni sustitutivos. ",
        bananap3: "A medida que nuestro negocio de panes de plátano avanza, también hemos empezado a investigar cómo hornearlos con ingredientes locales. En la actualidad (además de utilizar nuestros propios plátanos ecológicos cultivados de forma silvestre) esto significa nibs de cacao locales y sin procesar, marinados en una mezcla de miel y aceite, pero esperamos pasar pronto a la vainilla local cultivada en casa, a la mantequilla procedente de empresas de mujeres cercanas, a la miel fresca e incluso a las harinas locales sin gluten. ",
        bananap4: "A medida que continuamos desarrollando y experimentando, también esperamos cultivar nuestros propios ingredientes en el lugar. Tenemos varios árboles de cacao en camino y estamos desarrollando nuestra propia rutina de fermentación para el cacao resultante. A medida que continuamos desarrollando, también tenemos la intención de explorar los jardines de vainilla que nos permitirían utilizar también la vainilla cultivada en casa. ",
        bananap5: "Nuestros panes de plátano están actualmente disponibles sólo para la venta local, pero esperamos abrir pronto los pedidos en línea. ",
        bananat1: "Plátanos",
        bananat2: "Nuestro menú",
        bananat3: "Ingredientes locales",
        bananat4: "Cacao",
        donationtitle: "Donaciones",
        donationqn: "¿Por qué necesitamos donaciones?",
        donationp: "Nuestra misión es crear tecnología que pueda ser poseída y producida por los agricultores locales. Somos un pequeño equipo familiar que cubre los costes de creación de prototipos y desarrollo de su propio bolsillo: no hay grandes inversores ni planes para vender nuestra tecnología a un alto coste. Cada donación nos permite dedicar más tiempo y materiales a poner la tecnología en el mercado para las pequeñas granjas y la propiedad cooperativa"
    }
};

if (window.location.hash) {
    if (window.location.hash === "#es") {
        // switch all!
        homeh1.textContent = language.es.homeh1;
        homeh2.textContent = language.es.homeh2;
        coffeeli1.textContent = language.es.coffeeli1;
        coffeeli2.textContent = language.es.coffeeli2;
        coffeeli3.textContent = language.es.coffeeli3;
        bananali1.textContent = language.es.bananali1;
        bananali2.textContent = language.es.bananali2;
        bananali3.textContent = language.es.bananali3;
        h4qn.textContent = language.es.h4qn;
        h4asw.textContent = language.es.h4asw;
        // done
        coffeep1.textContent = language.es.coffeep1;
        coffeep2.textContent = language.es.coffeep2;
        coffeep3.textContent = language.es.coffeep3;
        coffeep4.textContent = language.es.coffeep4;
        coffeep5.textContent = language.es.coffeep5;
        coffeep6.textContent = language.es.coffeep6;
        coffeep7.textContent = language.es.coffeep7;
        coffeet1.textContent = language.es.coffeet1;
        coffeet2.textContent = language.es.coffeet2;
        coffeet3.textContent = language.es.coffeet3;
        coffeet4.textContent = language.es.coffeet4;
        coffeet5.textContent = language.es.coffeet5;
        coffeet6.textContent = language.es.coffeet6;
        coffeet1_index.textContent = language.es.coffeet1;
        coffeet2_index.textContent = language.es.coffeet2;
        coffeet3_index.textContent = language.es.coffeet3;
        coffeet4_index.textContent = language.es.coffeet4;
        coffeet5_index.textContent = language.es.coffeet5;
        coffeet6_index.textContent = language.es.coffeet6;
        bananap1.textContent = language.es.bananap1;
        bananap2.textContent = language.es.bananap2;
        bananap3.textContent = language.es.bananap3;
        bananap4.textContent = language.es.bananap4;
        bananap5.textContent = language.es.bananap5;
        bananat1.textContent = language.es.bananat1;
        bananat2.textContent = language.es.bananat2;
        bananat3.textContent = language.es.bananat3;
        bananat4.textContent = language.es.bananat4;
        donationtitle.textContent = language.es.donationtitle;
        donationqn.textContent = language.es.donationqn;
        donationp.textContent = language.es.donationp;
    }
}

for (i = 0; i <= dataReload.length; i++) {
    dataReload[i].onclick = function() {
        location.reload(true);
    };
}

