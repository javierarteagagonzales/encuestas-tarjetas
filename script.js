const questions = [
    {
        question: "1. Si usted tuviera la habilidad y condiciones adecuadas, ¿a qué se dedicaría?",
        options: [
            "A) A modificar todos los jardines de la ciudad.",
            "B) A obtener logros por medio de la política.",
            "C) A prestar dinero a altos intereses.",
            "D) A cumplir con las obligaciones que su religión le impone."
        ]
    },
    {
        question: "2. Cuando ve un accidente usted:",
        options: [
            "A) Se pone a orar con la persona accidentada.",
            "B) Pide una ambulancia.",
            "C) Cuida las pertenencias del accidentado.",
            "D) Trata de detener al culpable."
        ]
    },
    {
        question: "3. Es usted un maestro de primaria y uno de sus alumnos le ofrece un costoso obsequio con el fin de obtener una mayor calificación usted:",
        options: [
            "A) Le dedicaría tiempo extra para nivelarlo.",
            "B) Lo rechazaría amablemente y lo invitaría a estudiar.",
            "C) Aceptaría el presente y le daría la calificación deseada por su alumno, porque usted sabe que es inteligente.",
            "D) Llamaría a sus padres para que paguen clases particulares."
        ]
    },
    {
        question: "4. Al conducir su automóvil por descuido usted se pasa un alto, el agente de tránsito lo detiene y para permitirle circular nuevamente, le solicita cierta suma de dinero usted:",
        options: [
            "A) Arranca su automóvil y deja al agente de tránsito.",
            "B) Trata de llegar a un acuerdo encaminado a disminuir la cantidad de dinero.",
            "C) Pide le sea levantada la infracción pertinente.",
            "D) Amenaza al agente con reportarlo con sus superiores."
        ]
    },
    {
        question: "5. Prefiere una amistad que:",
        options: [
            "A) Sea activo y le guste reparar defectos en su hogar.",
            "B) Se interese por ser líder en el sindicato del cual forma parte.",
            "C) Asistir con frecuencia a eventos religiosos.",
            "D) Le interesa emprender negocios."
        ]
    },
    {
        question: "6. Si al llegar a su trabajo encuentra en el baño un reloj en el lavabo usted:",
        options: [
            "A) Trataría de encontrar a su dueño.",
            "B) Lo reporta a sus superiores y lo entrega.",
            "C) No hace ningún comentario y espera a que lo busquen.",
            "D) Lo deja donde lo encontró."
        ]
    },
    {
        question: "7. Un buen gobierno debería:",
        options: [
            "A) Ayudar a las clases necesitadas.",
            "B) Ampliar las zonas turísticas de cinco estrellas.",
            "C) Buscar a los mejores líderes de su partido.",
            "D) Permitir que la religión sea oficial."
        ]
    },
    {
        question: "8. Un amigo suyo desea obtener un ascenso dentro de su trabajo, usted le aconseja:",
        options: [
            "A) Que sea cumplido y eficiente.",
            "B) Que busque cuales son los errores del jefe para que demuestre que el no es perfecto.",
            "C) Que prometa una manda a su santo de preferencia.",
            "D) Que ofrezca una excelente comida a los dirigentes de la empresa."
        ]
    },
    {
        question: "9. Si Luis al llegar a su casa observa que le están robando las llantas al automóvil de su vecino:",
        options: [
            "A) Llamaría a la policía.",
            "B) Llamaría a su vecino.",
            "C) Pediría a los asaltantes parte del beneficio que obtendrán en el robo, por guardar silencio.",
            "D) Mejor no haría nada y se metería a su casa."
        ]
    },
    {
        question: "10. Un empleado de 60 años que ha sido leal a la empresa durante 28 años, se queja del exceso de trabajo, lo mejor sería:",
        options: [
            "A) Pedir un aumento de sueldo.",
            "B) Recurrir al sindicato para que éste le ayude.",
            "C) Que recurra a su guía espiritual para que le diga como se le debe ayudar y su trabajo no se le haga pesado.",
            "D) Que solicite una persona para que le ayude."
        ]
    },
    {
        question: "11. Usted visita a un amigo enfermo y lo mejor sería:",
        options: [
            "A) Que lo convenza de acudir al seguro social para que su atención médica no le sea costosa.",
            "B) Proponerle su ayuda cuando él tenga que acudir a sus citas médicas.",
            "C) Que como todo le ha salido mal últimamente vea a una persona para que le realice una limpia.",
            "D) Decirle lo importante que fueron las juntas de vecinos ahora que él estuvo hospitalizado."
        ]
    },
    {
        question: "12. Al salir de viaje sus vecinos le piden cuidar su casa, durante su ausencia usted:",
        options: [
            "A) Les dice que no debido a que se encuentra muy ocupado en esos días.",
            "B) Atiende con gusto la petición de sus vecinos.",
            "C) A cambio de sus servicios les solicita prestado el automóvil que no utilizarán en su viaje.",
            "D) Asiste al módulo de vigilancia local, para que le brinde mayor seguridad."
        ]
    },
    {
        question: "13. Si encuentra a un niño llorando sólo en una tienda comercial usted:",
        options: [
            "A) Lo ayudaría a buscar a su familia en la tienda.",
            "B) Lo llevaría al área de servicios generales para que ahí espere a que lo ayuden.",
            "C) Pasaría de largo porque usted tiene prisa.",
            "D) Lo llevaría a su casa pero le cobraría a la mamá por el tiempo que usted perdió por andarla buscando."
        ]
    },
    {
        question: "14. Si usted viviera en provincia y tuviera más entradas de las que necesita, ¿qué preferiría hacer con el dinero?",
        options: [
            "A) Hacerlo producir para ayudar al desarrollo de la industria.",
            "B) Donarlo para la construcción de una iglesia.",
            "C) Darlo a una sociedad para el beneficio de las familias humildes del poblado.",
            "D) Apoyar ayuda al partido político con el cual simpatiza."
        ]
    },
    {
        question: "15. Su hijo ha dejado sus estudios por un tiempo:",
        options: [
            "A) Le sugiere que vea a los maestros para que les proponga que lo ayuden.",
            "B) Que haga lo que quiera pues ya está grande.",
            "C) Que curse nuevamente el año para que pase las materias reprobadas.",
            "D) Darle apoyo económico y moral para que supere este tropiezo en sus estudios."
        ]
    },
    {
        question: "16. A qué actividad prefiere dedicarse durante sus vacaciones:",
        options: [
            "A) Obtener experiencia en otro negocio que no sea el propio.",
            "B) Participar en la campaña política de diputados que se va a efectuar en su localidad.",
            "C) Asistir a un retiro organizado por la iglesia.",
            "D) Visitar un lugar que no conoce, en compañía de su familia."
        ]
    },
    {
        question: "17. La familia de Pedro tiene un hijo drogadicto y es amigo de su hijo desde pequeño, al saberlo usted:",
        options: [
            "A) Le pide a su hijo que no lo vuelva a ver.",
            "B) Le sugiere a su familia que lo lleven a Centros de Integración Juvenil para que lo ayuden.",
            "C) Si el muchacho ya es drogadicto le pide le obsequie un reloj que tanto le gusta a su hijo para no decírselo a sus padres.",
            "D) Lo lleva a un centro de rehabilitación junto con su hijo para que sienta que lo apoya y no es rechazado."
        ]
    },
    {
        question: "18. Su esposa le comenta que al terminar de realizar sus actividades cotidianas le queda mucho tiempo libre, usted le sugiere:",
        options: [
            "A) Que emplee su tiempo como catequista de la iglesia.",
            "B) Que venda artículos femeninos.",
            "C) Que promueva juntas entre los vecinos encaminadas a resolver los problemas de la comunidad",
            "D) Que asista con sus hijos a centros recreativos sí fuera posible."
        ]
    },
    {
        question: "19. Quiere pedir un favor a un conocido, que beneficiará a la empresa para la cual trabaja:",
        options: [
            "A) Le explica los motivos y necesidades por las cuales requiere ese favor.",
            "B) Le pide el favor sin mayor explicación.",
            "C) Le hace creer que él será el más beneficiado al ofrecerle una retribución.",
            "D) Le sugiere a su jefe que sea él quien se lo pida y explique la necesidad."
        ]
    },
    {
        question: "20. ¿Cuál de las siguientes ocupaciones escogería?",
        options: [
            "A) Trabajar en forma independiente.",
            "B) Como encargado del departamento en el cual a usted le gusta.",
            "C) Dedicarse a estudios de la iglesia.",
            "D) Trabajador social."
        ]
    }
        
    // Agrega todas las preguntas restantes de manera similar...
];

let currentQuestionIndex = 0;

function createQuestionCard(question, options, index) {
    return `
        <div class="card">
            <p>${question}</p>
            <ul id="sortable${index}" class="sortable">
                ${options.map((option, i) => `<li data-id="${i+1}">${option}</li>`).join('')}
            </ul>
        </div>
    `;
}

function loadQuestion(index) {
    const question = questions[index];
    const container = document.getElementById('question-container');
    container.innerHTML = createQuestionCard(question.question, question.options, index + 1);

    // Mostrar o ocultar botones de siguiente y anterior según la pregunta actual
    if (index === 0) {
        document.getElementById('previous-btn').style.display = 'none';
    } else {
        document.getElementById('previous-btn').style.display = 'block';
    }

    if (index === questions.length - 1) {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('submit-btn').style.display = 'block';
    } else {
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('submit-btn').style.display = 'none';
    }
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    }
}

function submitSurvey() {
    let results = [];
    questions.forEach((_, index) => {
        let order = [];
        $(`#sortable${index + 1} li`).each(function() {
            order.push($(this).data('id'));
        });
        results.push(order);
    });
    alert('Tus respuestas son: ' + JSON.stringify(results));
    // Aquí puedes enviar las respuestas al servidor utilizando AJAX
    // $.post('server-url', { results: results }, function(response) {
    //     console.log(response);
    // });
}

document.addEventListener('DOMContentLoaded', function() {
    loadQuestion(currentQuestionIndex);
});


function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('submit-btn').style.display = 'none';
    }
}
