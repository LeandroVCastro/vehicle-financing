<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Vehicle;

use function PHPSTORM_META\map;

class VehiclesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Uninho
        Vehicle::create([
            'photo_url' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu4O9JBD1d9rxwKQvR1so5vuiyVmSSbv6CYK1Ff9cVug&s',
            'city' => 'São Paulo',
            'brand' => 'Fiat',
            'model' => 'Uno',
            'description' => 'O Fiat Uno é um carro compacto conhecido por sua praticidade e eficiência. Com um design simples e funcional, é ideal para deslocamentos urbanos e viagens curtas. Possui um interior espaçoso apesar de suas dimensões compactas, oferecendo conforto para motorista e passageiros. Além disso, é reconhecido por sua economia de combustível e baixo custo de manutenção, tornando-se uma escolha popular para aqueles que buscam um veículo acessível e confiável.',
            'year' => 2015,
            'km' => 68012,
            'gear' => 'manual',
            'phone' => '(11) 98888-8888',
            'price' => 2000000
        ]);

        // Gol bolinha
        Vehicle::create([
            'photo_url' => 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg24V09m-FgtupLVsylnK7FrHbyg9jnJw-x8l46L-nqRPmNRmR4XSVO6Nkcjf2zE6m54_pSOPKNp4yD68xOJW1vToE8E0RCxlK1UoCWoj_YuzZtC1ppOb458o2nAuSzN9B02GSNAWNvN5g/s1600/Novo-Gol-G4-2012-Traseira.jpg',
            'city' => 'Rio de Janeiro',
            'brand' => 'Volkswagen',
            'model' => 'Gol G4',
            'description' => 'O Volkswagen Gol G4 é um carro compacto que se destacou pela sua robustez e versatilidade. Com um design sólido e tradicional, é conhecido por sua durabilidade e desempenho confiável, especialmente em condições urbanas. Apesar de ser um veículo compacto, oferece um espaço interno surpreendente, proporcionando conforto para motorista e passageiros. Reconhecido por sua manobrabilidade ágil e baixo consumo de combustível, o Gol G4 é uma escolha popular entre aqueles que buscam um carro econômico e de fácil manutenção, ideal para uso diário na cidade.',
            'year' => 2012,
            'km' => 100908,
            'gear' => 'manual',
            'phone' => '(21) 98888-7777',
            'price' => 2800000
        ]);

        // Camaro amarelo
        Vehicle::create([
            'photo_url' => 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjCL8t2sZbGWcB70d3Z-FNJfukfTsi_i76W0CkTVfGM6_WhTnil3iO3pIP6PtNPamopptAwtzdBk1iKVZ-Nsy6MCm7RGA9JPUq14knmJoJkuqbmNDWaSrPt77PehcDytKUjYrjulcrJo94d/w1200-h630-p-k-no-nu/DSCN0737_.JPG',
            'city' => 'Belo Horizonte',
            'brand' => 'Chevrolet',
            'model' => 'Camaro',
            'description' => 'O Chevrolet Camaro 2013 é um ícone da potência e do estilo americano, oferecendo uma experiência de condução emocionante e impressionante. Com seu design musculoso e aerodinâmico, o Camaro é instantaneamente reconhecido em qualquer estrada. Equipado com um motor V6 ou V8, proporciona um desempenho excepcional, entregando uma combinação de velocidade, potência e resposta rápida ao acelerador. Seu interior combina conforto e tecnologia, oferecendo uma variedade de recursos modernos e um ambiente luxuoso para motorista e passageiros. Combinando performance de alto nível com um visual cativante, o Camaro 2013 é uma escolha definitiva para entusiastas de carros esportivos.',
            'year' => 2013,
            'km' => 38021,
            'gear' => 'manual',
            'phone' => '(31) 98888-6666',
            'price' => 12200000
        ]);
    }
}
