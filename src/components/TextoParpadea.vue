<template>

<div class="textoparpadea">
    <span class="parpadea text">
        <p>En Juna, Clairo nos habla de un interés romántico. La letra describe una relación donde la superficialidad desaparece y permite una conexión genuina. Muchas frases de la letra de la canción tratan el tema del contacto físico, lo que sugestiona que la artista tiene una conexión muy profunda con esta persona. La canción también trata el tema de la autoexpresión en pareja con frases como “Me haces querer bailar, me haces querer ser femenina, me haces querer ir a comprar un vestido nuevo”, donde Clairo se siente tan cómoda con esta persona que puede ser ella misma sin tapujos.</p>
    </span>

</div>
</template>



<style>

.textoparpadea {
  font-weight:normal;
}

.parpadea text{
  font-weight:normal;
}

p {
  color: black;
  font-weight: normal;

}
.parpadea {

animation-name: parpadeo;
animation-duration: 1.5s;
animation-timing-function: linear;
animation-iteration-count: infinite;

-webkit-animation-name:parpadeo;
-webkit-animation-duration: 1s;
-webkit-animation-timing-function: linear;
-webkit-animation-iteration-count: infinite;
}

@-moz-keyframes parpadeo{  
0% { opacity: 1.0; }
50% { opacity: 0.0; }
100% { opacity: 1.0; }
}

@-webkit-keyframes parpadeo {  
0% { opacity: 1.0; }
50% { opacity: 0.0; }
 100% { opacity: 1.0; }
}

@keyframes parpadeo {  
0% { opacity: 1.0; }
 50% { opacity: 0.0; }
100% { opacity: 1.0; }
}

</style>


