document.addEventListener('DOMContentLoaded',function(){
    const monthsBR = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    const tableDays = document.getElementById('dias');

    function GetyDaysCalendar(mes,ano){
        document.getElementById('mes').innerHTML = monthsBR[mes];
        document.getElementById('ano').innerHTML = ano;

        let firstDayOfWeek = new Date(ano,mes,1).getDay()-1;
        let getLastDayThisMonth = new Date(ano, mes + 1, 0).getDate();

        for (var i = -firstDayOfWeek,index = 0; i < (42-firstDayOfWeek); i++,index++){
            let dt = new Date(ano,mes,i);
            let dtNow = new Date();
            let dayTable = tableDays.getElementsByTagName('td')[index];
            dayTable.classList.remove('mes-anterior');
            dayTable.classList.remove('proximo-mes');
            dayTable.classList.remove('dia-atual');
            dayTable.innerHTML = dt.getDate();

            if (dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()){
                dayTable.classList.add('dia-atual')
            }
            if (i < 1){
                dayTable.classList.add('mes-anterior')
            }
            if(i > getLastDayThisMonth){
                dayTable.classList.add('proximo-mes')
            }
        }
    }

    let now = new Date();
    let mes = now.getMonth();
    let ano = now.getFullYear();
    let firstDayOfWeek = new Date(ano,mes,1).getDay()-1;
    GetyDaysCalendar(mes, ano);

    const botao_proximo = document.getElementById('btn-prev');
    const botao_anterior = document.getElementById('btn-ant');

    botao_proximo.onclick = function(){
        mes++;
        if(mes > 10){
            botao_proximo.classList.add('btn-desabilitado');
        }
        GetyDaysCalendar(mes, ano);
        botao_anterior.classList.remove('btn-desabilitado');
        limpaMes();
    }

    botao_anterior.onclick = function(){
        mes--;
        if(mes < 1){
            botao_anterior.classList.add('btn-desabilitado');
        }
        GetyDaysCalendar(mes, ano);
        botao_proximo.classList.remove('btn-desabilitado');
        limpaMes();
    }

    var form = document.querySelector('#form');
    var botao = document.querySelector('#btn-salvar');
    botao.addEventListener('click', function(event) {
        event.preventDefault();

        let firstDayOfWeek = new Date(ano,mes,1).getDay()-1;
        let getLastDayThisMonth = new Date(ano, mes + 1, 0).getDate();

        const cssEnumeradas = [
            m ="mes-anterior",
            d = "diurno",
            n = "noturno",
            f = "folga",
            p = "proximo-mes"
        ];
        //----------------------------------------------- Janeiro --------------------------------------------
        if (mes == 0 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                m, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 0 && form.turno.value == 2){
            limpaMes();
            const classes = [
                m, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 0 && form.turno.value == 3){
            limpaMes();
            const classes = [
                m, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        // ------------------------------------------- Fevereiro ---------------------------------------------
        if (mes == 1 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                m, m, m, m, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 1 && form.turno.value == 2){
            limpaMes();
            const classes = [
                m, m, m, m, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 1 && form.turno.value == 3){
            limpaMes();
            const classes = [
                m, m, m, m, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        //------------------------------------------------ Março --------------------------------------------
        if (mes == 2 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                m, m, m, m, m, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 2 && form.turno.value == 2){
            limpaMes();
            const classes = [
                m, m, m, m, m, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 2 && form.turno.value == 3){
            limpaMes();
            const classes = [
                m, m, m, m, m, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        //--------------------------------------------- Abril ------------------------------------------------
        if (mes == 3 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                m, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 3 && form.turno.value == 2){
            limpaMes();
            const classes = [
                m, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 3 && form.turno.value == 3){
            limpaMes();
            const classes = [
                m, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        //--------------------------------------------- Maio ------------------------------------------------
        if (mes == 4 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                m, m, m, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 4 && form.turno.value == 2){
            limpaMes();
            const classes = [
                m, m, m, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 4 && form.turno.value == 3){
            limpaMes();
            const classes = [
                m, m, m, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        //--------------------------------------------- Junho ------------------------------------------------
        if (mes == 5 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                m, m, m, m, m, m, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 5 && form.turno.value == 2){
            limpaMes();
            const classes = [
                m, m, m, m, m, m, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 5 && form.turno.value == 3){
            limpaMes();
            const classes = [
                m, m, m, m, m, m, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        //--------------------------------------------- Julho ------------------------------------------------
        if (mes == 6 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                m, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 6 && form.turno.value == 2){
            limpaMes();
            const classes = [
                m, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 6 && form.turno.value == 3){
            limpaMes();
            const classes = [
                m, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        //--------------------------------------------- Agosto ------------------------------------------------
        if (mes == 7 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                m, m, m, m, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 7 && form.turno.value == 2){
            limpaMes();
            const classes = [
                m, m, m, m, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 7 && form.turno.value == 3){
            limpaMes();
            const classes = [
                m, m, m, m, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        //-------------------------------------------- Setembro -----------------------------------------------
        if (mes == 8 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 8 && form.turno.value == 2){
            limpaMes();
            const classes = [
                d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 8 && form.turno.value == 3){
            limpaMes();
            const classes = [
                f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        //-------------------------------------------- Outubro -----------------------------------------------
        if (mes == 9 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                m, m, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 9 && form.turno.value == 2){
            limpaMes();
            const classes = [
                m, m, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f 
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 9 && form.turno.value == 3){
            limpaMes();
            const classes = [
                m, m, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        //-------------------------------------------- Novembro -----------------------------------------------
        if (mes == 10 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                m, m, m, m, m, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 10 && form.turno.value == 2){
            limpaMes();
            const classes = [
                m, m, m, m, m, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 10 && form.turno.value == 3){
            limpaMes();
            const classes = [
                m, m, m, m, m, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
        //-------------------------------------------- Dezembro -----------------------------------------------
        if (mes == 11 && form.turno.value == 1) {
            limpaMes();
            const classes = [
                f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 11 && form.turno.value == 2){
            limpaMes();
            const classes = [
                n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        } else if(mes == 11 && form.turno.value == 3){
            limpaMes();
            const classes = [
                d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n, n, n, f, f, f, d, d, d, n
            ];
            for (let x = 0; x < 42; x++) {
                let dayTable = tableDays.getElementsByTagName('td')[x];
                dayTable.classList.add(classes[x]);
            }
        }
    });

    function limpaMes () {
        for (var y = 0; y < 12; y++){
            if (mes == y){
                for(var x = 0; x < 42 ;x++){
                    let day = tableDays.getElementsByTagName('td')[x];
                    day.classList.remove('diurno', 'noturno', 'folga');
                }
            }
        }
    }
});

        