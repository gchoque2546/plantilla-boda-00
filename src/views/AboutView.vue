<template>
  <div class="grid">
    <!--Titulo-->
    <div class="col-12 md:col-12 pr-0 pl-0">
        <div class="text-center p-1">
          <div class="containerimg pr-8 pl-8">
            <Image src="public/img/arco01.webp" alt="MyE"/>
          </div>
          <p class="fadein animation-duration-3000 animation-iteration-1 texto-parrafo uppercase text-black-alpha-90 text-sm md:text-2xl pr-5 pl-5 pt-3">CON CORAZONES LLENOS DE AMOR Y GRATITUD, LES PEDIMOS EL HONOR DE ACOMPAÑARNOS EN EL DIA DE NUESTRA BODA. JUNTOS INICIAREMOS UN NUEVO CAMINO, Y QUEREMOS COMPARTIR ESTE MOMENTO TAN SIGNIFICATIVO CON TODOS USTEDES.</p>
          <p class="fadein animation-duration-3000 animation-iteration-1 texto-titulo font-bold text-black-alpha-90 text-3xl md:text-6xl mb-1">¡Nos Casamos!</p>
          <h1 class="fadein animation-duration-3000 animation-iteration-1 texto-titulo font-bold text-black-alpha-90 text-6xl md:text-8xl m-0">Marco y Elizabeth</h1>
        </div>
    </div>
    <!--Cancion-->
      <div class="card f-vidrio border-none shadow-5 mr-7 ml-7 pt-3 pb-3 w-full">
          <audio-player :option="audioOption" />
      </div> 
    <!--Padres del Novio y Novia-->
    <div class="col-12 md:col-12 p-0">
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase font-semibold text-black-alpha-90 text-sm md:text-3xl pt-3 pb-3 pl-5 pr-5">CON LA BENDICION DE DIOS Y NUESTROS PADRES</p>
    </div>
    <div class="col-12 md:col-6 p-0">
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase text-black-alpha-90 text-sm md:text-2xl pt-4 pb-2 mb-0">SIMON CONDORI GUTIERREZ</p>
      <p class=" fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase text-black-alpha-90 text-sm md:text-2xl pt-2 pb-2 mb-0">MARIBEL HUANCA DE CONDORI</p>
    </div>
    <div class="col-12 md:col-6 p-0">
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase text-black-alpha-90 text-sm md:text-2xl pt-4 pb-2 mb-0">EDGAR CHOQUE SALINAS</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase text-black-alpha-90 text-sm md:text-2xl pt-2 pb-2 mb-0">ALEJANDRA PARDO DE CHOQUE</p>
    </div>
    <!--Fecha de la Boda-->
    <div class="col-12 md:col-12 p-0">
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo texto-parrafo-sombra uppercase font-semibold text-black-alpha-90 text-2xl md:text-5xl pt-5 pb-3">SABADO 07 DE OCUBRE</p>
    </div>
    <!--Iglesia-->
    <div class="col-12 md:col-6 p-0 flex flex-column align-items-center">
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase font-semibold text-black-alpha-90 text-lg md:text-4xl pt-4 pb-2 mb-0">CEREMONIA RELIGIOSA</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase font-medium text-black-alpha-90 text-base md:text-3xl pt-2 pb-2 mb-0">HORAS 10:30</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase font-medium text-black-alpha-90 text-base md:text-3xl pt-2 pb-2 mb-0">IGLESIA "SAN GERONIMO"</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo font-medium text-black-alpha-90 text-base md:text-2xl pt-2 pb-2 mb-0">AV. ARMENTIA No. 512</p>
      <a href="https://maps.app.goo.gl/ZunGjHFsq1sK9neeA">
        <Button label="Ver Ubicacion" icon="pi pi-map-marker" severity="contrast" text raised rounded ></Button>
      </a>
    </div>
    <!--Recepcion-->
    <div class="col-12 md:col-6 p-0 flex flex-column align-items-center">
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase font-semibold text-black-alpha-90 text-lg md:text-4xl pt-4 pb-2 mb-0">RECEPCION</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase text-black-alpha-90 text-base md:text-xl pt-2 pb-2 pl-5 pr-5 mb-0">PASADA LA CEREMONIA RELIGIOSA, INVITAMOS A COMPARTIR LA ALEGRIA DE NUESTRA BODA EN EL SALON DE EVENTOS</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase font-medium text-black-alpha-90 text-base md:text-3xl pt-2 pb-2 mb-0">"SANTA ISABEL"</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo font-medium text-black-alpha-90 text-base md:text-2xl pt-2 pb-2 mb-0">CALLE JUAN GRANIER No. 937</p>
      <a href="https://maps.app.goo.gl/ZunGjHFsq1sK9neeA">
        <Button label="Ver Ubicacion" icon="pi pi-map-marker" severity="contrast" text raised rounded ></Button>
      </a>
    </div>
    <!--Cronograma-->
    <div class="col-12 md:col-12 pr-8 pl-8">
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo texto-parrafo-sombra uppercase font-semibold text-black-alpha-90 text-lg md:text-4xl pt-4 pb-2 mb-0">CRONOGRAMA</p>
      <div class="card border-none shadow-5">
        <Timeline :value="events">
          <template #opposite="slotProps">
            <small class="text-center texto-parrafo text-black-alpha-90 text-base md:text-3xl">{{slotProps.item.date}}</small>
          </template>
          <template #content="slotProps">
            <small class="text-center texto-parrafo text-black-alpha-90 text-base md:text-3xl">{{slotProps.item.status}}</small>
          </template>
        </Timeline>
      </div>
    </div>
    <!--Padrinos-->
    <div class="col-12 md:col-6 p-0">
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase font-semibold text-black-alpha-90 text-base md:text-4xl pt-4 mb-0">PADRINOS DE RELIGION</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase text-black-alpha-90 text-sm md:text-2xl pt-4 pb-2 mb-0">CRISTIAN COARITE VASQUEZ</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase text-black-alpha-90 text-sm md:text-2xl pt-2 pb-2 mb-0">ANA GUZMAN DE COARITE</p>
    </div>
    <div class="col-12 md:col-6 p-0">
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase font-semibold text-black-alpha-90 text-base md:text-4xl pt-4 mb-0">PADRINOS DE CIVIL</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase text-black-alpha-90 text-sm md:text-2xl pt-4 pb-2 mb-0">CARLOS PEREZ COAQUIRA</p>
      <p class="fadein animation-duration-3000 animation-iteration-1 text-center texto-parrafo uppercase text-black-alpha-90 text-sm md:text-2xl pt-2 pb-2 mb-0">MARIA LOPEZ FLORES</p>
    </div>
    <!--Galeria-->
    <div class="col-12 md:col-12">
      <div class="card border-none flex justify-content-center p-0">
        <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">
          <template #item="slotProps">
            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
          </template>
          <template #thumbnail="slotProps">
            <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
          </template>
        </Galleria>
      </div>
    </div>
    <div class="col-12 md:col-12 pt-1 pb-1 pl-8 pr-8 flex flex-column align-items-center">
      <Button class="w-full md:w-3 bg-black-alpha-10 border-none" label="Nuestra Galeria" icon="pi pi-images" @click="displayBasic = true"></Button>
    </div>
    <!--Confirmacion de Asistencia-->
    <div class="col-12 md:col-12 p-0 flex flex-column align-items-center mt-3 mb-3">
      <a href="https://walink.co/ac894e">
        <Button label="Confirma tu Asistencia Aqui" icon="pi pi-whatsapp" severity="contrast" text raised rounded ></Button>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/service/PhotoService';
import AudioPlayer from "vue3-audio-player";
import "vue3-audio-player/dist/style.css";

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const date = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1500px',
        numVisible: 5
    },
    {
        breakpoint: '1024px',
        numVisible: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
]);
const displayBasic = ref(false);
const audioOption = {
      //src: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
      src: "public/audio/Río Roma - Por Eso Te Amo.mp3",
      title: "Río Roma - Por Eso Te Amo",
      //coverImage: "https://bestofvue.com/assets/images/logo_bestofvue.png",
      coverImage: "public/img/disco01.webp",
    };

  const events = ref([
    { status: 'Boda Civil', date: '10:00', icon: 'pi pi-home', color: '#FFBBDA'},
    { status: 'Ceremonia Religiosa', date: '11:00', icon: 'pi pi-heart', color: '#FF84BC' },
    { status: 'Vals y Brindis', date: '16:00', icon: 'pi pi-video', color: '#FFBBDA' },
    { status: 'Cena', date: ' 19:30', icon: 'pi pi-inbox', color: '#FF84BC' },
    { status: 'Torta', date: ' 22:00', icon: 'pi pi-chart-pie', color: '#FFBBDA' },
    { status: 'Bouquet', date: '22:30', icon: 'pi pi-bell', color: '#FF84BC' },
    { status: 'Conteo de Regalos', date: '08/10/2024 13:30', icon: 'pi-shopping-bag', color: '#FFBBDA' },
  ]);
</script>

<style>
.grid{
  /*background-image: url("public/img/fondo01.webp");*/
  background-image: url("public/img/fondo32.webp");
  background-color: rgb(175, 175, 175);
  background-blend-mode: soft-light;
  /*background: cover;*/
  background-size: cover;
  background-repeat: no-repeat;
}
.containerimg{
  
  max-width: 500px;
  min-width: 15px;
  padding-left: 3rem;
  padding-right: 3rem;
  margin: auto;
}
img {
  width: 100%;
}

.f-none{
  background-color:rgba(255, 255, 255, 0);
}
.card{
  background-color:rgba(255, 255, 255, 0.1);
}

.texto-titulo{
  font-family: "Pinyon Script", cursive;
  text-shadow: 1px 1px 0px #fff;
}
.texto-parrafo{
  font-family: "Donegal One", serif;
  font-style: normal;
}
.texto-parrafo-sombra{
  text-shadow: 1px 1px 0px #fff;
}
@media screen and (max-width: 960px) {
    ::v-deep(.customized-timeline) {
        .p-timeline-event:nth-child(even) {
            flex-direction: row;

            .p-timeline-event-content {
                text-align: left;
            }
        }

        .p-timeline-event-opposite {
            flex: 0;
        }
    }
}
</style>