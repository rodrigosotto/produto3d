<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Chicken Balls - Misslaura</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <!-- Link Swiper's CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  <link rel="stylesheet" href="./assets/css/produto3d.css" />
 
</head>

<body>
<h1 class="title-swiper">Chicken Balls ou Croqueta de Pollo</h1>

  <!-- Swiper -->
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <?php
      // Diretório da pasta específica
      $pastaEspecifica = './assets/images/produtos-ingles/chicken_balls/';

      // Lista de imagens na pasta específica
      $imagens = scandir($pastaEspecifica);

      // Remover os diretórios '.' e '..'
      $imagens = array_diff($imagens, array('..', '.'));

      // Iterar sobre as imagens
      foreach ($imagens as $index => $imagem) {
        // Imprimir o código do swiper para cada imagem
        echo '<div class="swiper-slide">';
        echo '<img src="' . $pastaEspecifica . $imagem . '" alt="CHICKEN-BALLS" />';
        echo '</div>';
      }
      ?>
    </div>
    <div class="swiper-pagination"></div>
  </div>

  <!-- Thumbnails -->
  <div class="swiper-thumbs" style="margin-top: 50px; margin-bottom: 50px; display: flex; justify-content: center; align-items: center;">

    <?php
    // Iterar sobre as imagens novamente para criar os thumbs
    foreach ($imagens as $index => $imagem) {
      // Determinar a classe para o thumb ativo
      $activeClass = ($index === 0) ? 'active' : '';

      // Imprimir o código do thumb
      echo '<img class="swiper-thumb ' . $activeClass . '" src="' . $pastaEspecifica . $imagem . '" alt="CHICKEN-BALLS" data-index="' . $index . '" />';
    }
    ?>
  </div>

  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="./assets/js/produto3d.js"></script>
</body>
</html>
