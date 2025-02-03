$(document).ready(function() {
    var selectedContainer1 = null;
    var selectedContainer2 = null;

    $('.btn-container1').on('click', function() {
        selectedContainer1 = $(this).data('group');
        checkAndDisplayResult();
    });

    $('.btn-container2').on('click', function() {
        selectedContainer2 = $(this).data('group');
        checkAndDisplayResult();
    });

	$('#resetBtn').on('click', function() {
        resetSelection();
    });

    function checkAndDisplayResult() {
        if (selectedContainer1 !== null && selectedContainer2 !== null) {
            var resultText = getResultText(selectedContainer1, selectedContainer2);
            $('#resultado p').text(resultText);
        }
    }

	function resetSelection() {
        selectedContainer1 = null;
        selectedContainer2 = null;
        $('#resultado p').text('Tu personalidad');
    }


    function getResultText(group1, group2) {
        // Implementa lógica para asignar el texto de resultado según las combinaciones
        // Puedes utilizar un enfoque de matriz bidimensional, un objeto, o cualquier método que prefieras
        // Aquí proporciono un ejemplo básico:
        var resultMapping = {
            '1': {
                '7': 'Eres una persona activa y curiosa. Disfrutas de la emoción de los deportes al aire libre y te apasiona explorar la historia y la arquitectura de ciudades antiguas.',
                '8': 'Tienes una personalidad aventurera y enérgica. Te encanta la emoción de los deportes al aire libre y explorar la naturaleza salvaje te llena de vitalidad.',
				'9': 'Eres una persona dinámica y versátil. Disfrutas de la actividad al aire libre y, al mismo tiempo, encuentras fascinación en la modernidad y la vida urbana.',
				'10': 'Tienes una personalidad equilibrada y adaptable. Disfrutas de la actividad al aire libre, pero también valoras la tranquilidad y la relajación en entornos isleños.',
				'11': 'Eres una persona amante de la adrenalina y la diversión. Tanto los deportes al aire libre como la emoción del esquí o snowboarding en montañas te llenan de alegría.',
				'12': 'Tienes una personalidad aventurera y aprecias la belleza invernal. La combinación de deportes al aire libre y la exploración de paisajes invernales te proporciona una experiencia única.',
                // ... otros grupos y textos
            },
            '2': {
                '7': 'Valoras la relajación y la cultura. Disfrutas de la serenidad de los días de spa y la riqueza histórica al recorrer las calles de antiguas ciudades europeas.',
                '8': 'Tienes una personalidad equilibrada que valora tanto la relajación como la aventura. Disfrutas de la calma del spa y de la vitalidad que proporciona explorar la naturaleza.',
				'9': 'Eres una persona que busca el equilibrio entre la relajación y la modernidad. Los días de spa te proporcionan tranquilidad, mientras que disfrutas explorando la arquitectura moderna y la vida urbana.',
				'10': 'Valoras la relajación y la escapada serena. Los días de spa te brindan calma, y relajarte en una isla te permite desconectar y disfrutar de la tranquilidad',
				'11': 'Eres una persona versátil que disfruta tanto de la relajación como de la emoción. Los días de spa te proporcionan tranquilidad, y la emoción del esquí o snowboarding en montañas añade un toque de aventura.',
				'12': 'Tienes una personalidad que aprecia la relajación y la belleza invernal. Los días de spa te ofrecen paz, y explorar paisajes invernales en un crucero te brinda experiencias únicas.',
            },
			'3': {
                '7': 'Eres una persona cultural y curiosa. Disfrutas de la escena cultural al visitar eventos y exposiciones, y también te encanta sumergirte en la historia al recorrer las calles de antiguas ciudades europeas.',
                '8': 'Tienes una personalidad creativa y exploradora. Aprecias la cultura y la naturaleza, encontrando inspiración en eventos culturales y la belleza natural de zonas salvajes.',
				'9': 'Eres una persona cosmopolita y cultural. Te sumerges en eventos culturales y disfrutas de la arquitectura moderna y la vida urbana, apreciando la diversidad y la innovación.',
				'10': 'Tienes una personalidad ecléctica y equilibrada. Disfrutas de la estimulación cultural y también buscas la serenidad al relajarte en una isla, encontrando armonía entre la emoción y la paz.',
				'11': 'Eres una persona versátil y curiosa. Encuentras inspiración en eventos culturales y disfrutas de la emoción del esquí o snowboarding en montañas, combinando lo cultural con la aventura.',
				'12': 'Tienes una personalidad que valora la cultura y la belleza invernal. Disfrutas de la riqueza cultural y explorar paisajes invernales en un crucero, fusionando lo artístico con la naturaleza.',
            },
			'4': {
                '7': 'Eres una persona creativa y curiosa. Disfrutas de la creatividad en casa haciendo manualidades y te maravillas con la historia al recorrer las calles de antiguas ciudades europeas.',
                '8': 'Tienes una personalidad creativa y conectada con la naturaleza. Disfrutas de la creatividad en casa haciendo manualidades y encuentras inspiración en la belleza natural de zonas salvajes.',
				'9': 'Eres una persona creativa y moderna. Disfrutas de la creatividad en casa haciendo manualidades y te fascina la arquitectura moderna y la vida urbana, encontrando inspiración en lo artístico y lo contemporáneo.',
				'10': 'Tienes una personalidad equilibrada y creativa. Disfrutas de la creatividad en casa haciendo manualidades y encuentras tranquilidad al relajarte en una isla, equilibrando la actividad creativa con la serenidad.',
				'11': 'Eres una persona creativa y aventurera. Disfrutas de la creatividad en casa haciendo manualidades y también buscas la emoción del esquí o snowboarding en montañas, fusionando lo artístico con la aventura.',
				'12': 'Tienes una personalidad creativa y apreciadora de la belleza invernal. Disfrutas de la creatividad en casa haciendo manualidades y explorar paisajes invernales en un crucero, encontrando inspiración en la combinación de lo artístico y lo natural.',
            },
			'5': {
                '7': 'Eres un explorador gastronómico y cultural. Disfrutas de la diversidad culinaria al descubrir nuevos restaurantes y también te maravillas con la historia al recorrer las calles de antiguas ciudades europeas.',
                '8': 'Eres un amante de la gastronomía y la naturaleza. Disfrutas de la variedad culinaria al descubrir nuevos restaurantes y también encuentras alegría en la belleza natural de zonas salvajes.',
				'9': 'Eres un gourmet urbano. Disfrutas de la exploración culinaria al descubrir nuevos restaurantes y también te fascina la arquitectura moderna y la vida urbana, fusionando lo gastronómico con lo contemporáneo.',
				'10': 'Tienes una personalidad ecléctica y gastronómica. Disfrutas de la diversidad culinaria al descubrir nuevos restaurantes y buscas la serenidad al relajarte en una isla, combinando la exploración culinaria con la tranquilidad.',
				'11': 'Eres un gourmet aventurero. Disfrutas de la exploración culinaria al descubrir nuevos restaurantes y también buscas la emoción del esquí o snowboarding en montañas, fusionando lo gastronómico con la aventura.',
				'12': 'Tienes una personalidad que aprecia la gastronomía y la belleza invernal. Disfrutas de la exploración culinaria al descubrir nuevos restaurantes y explorar paisajes invernales en un crucero, encontrando placer en lo gastronómico y lo natural.',
            },
			'6': {
                '7': 'Eres un amante de la música y la cultura. Disfrutas de la energía de los conciertos y festivales, y también te maravillas con la historia al recorrer las calles de antiguas ciudades europeas.',
                '8': 'Tienes una personalidad musical y aventurera. Disfrutas de la música en conciertos y festivales, y también encuentras alegría en la naturaleza salvaje, fusionando la pasión musical con la aventura.',
				'9': 'Eres un amante de la música y la vida urbana. Disfrutas de la energía de los conciertos y festivales, y también te fascina la arquitectura moderna y la vida urbana, combinando la pasión musical con la modernidad.',
				'10': 'Tienes una personalidad vibrante y tranquila. Disfrutas de la energía de los conciertos y festivales, pero también encuentras serenidad al relajarte en una isla, equilibrando la pasión musical con la tranquilidad.',
				'11': 'Eres un amante de la música y la adrenalina. Disfrutas de la pasión musical en conciertos y festivales, y también buscas la emoción del esquí o snowboarding en montañas, fusionando la música con la aventura.',
				'12': 'Tienes una personalidad musical y apreciadora de la belleza invernal. Disfrutas de la música en conciertos y festivales, y explorar paisajes invernales en un crucero te brinda una experiencia única que combina la pasión musical con la naturaleza invernal.',
            },
            // ... otros grupos y textos
        };

        return resultMapping[group1][group2] || 'Texto de resultado por defecto';
    }
});
