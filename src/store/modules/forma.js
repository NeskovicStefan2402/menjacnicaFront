
const state={
    polje : 0,
    suma : 0,
    convertFrom : '',
    convertTo : '',
    counter:0,
    valute:[],
    poslate:[],
    istorijaPromene:[],
    poruke:[],
    istorijaKlijent:[],
    validan:false,
    vesti:[]
};

const mutations={
    'U_DIN'(state,iz){
        console.log(iz);
        state.suma=iz.prodajni*state.polje;
    },
    'IZ_DIN'(state,u){
        console.log(u);
        state.suma=state.polje/u.kupovni;
    },
    'COUNTER'(state){
        state.counter++;
    },
    'GET_KURS'(state){
        axios
      .get('http://localhost:5000/getKurs')
      .then(response => (state.valute=response.data['Kurs'])
      )
    },
    'POST_PORUKA'(state,ele){
        axios
        .post('http://localhost:5000/postMessage', {
          email: ''+ele[1],
          sadrzaj: '' + ele[0]
        })
    },
    'POST_KURS'(state,lista){
        console.log(lista)
        axios
        .post('http://localhost:5000/postKurs', {
          Kurs: lista
        })
    },
    'ADD_VALUTA'(state,valuta){
        axios
        .post('http://localhost:5000/addValuta', {
          naziv: ''+valuta['naziv'],
          skracenica: '' + valuta['skracenica'],
          kupovni: ''+valuta['kupovni'],
          srednji: ''+valuta['srednji'],
          prodajni: ''+valuta['prodajni']
        })
    },
    'DELETE_VALUTA'(state,valuta){
        axios
        .delete('http://localhost:5000/deleteValuta', {
            data:{
            naziv: ''+valuta['naziv'],
            skracenica: '' + valuta['skracenica'],
            kupovni: ''+valuta['kupovni'],
            srednji: ''+valuta['srednji'],
            prodajni: ''+valuta['prodajni']}
          })
    },
    'GET_HISTORY'(state){
        axios
      .get('http://localhost:5000/getAllKurs')
      .then(response => (state.istorijaPromene=response.data['Istorija'])
      )
    },
    'GET_10_HISTORY'(state){
        axios
      .get('http://localhost:5000/getLast10days')
      .then(response => {state.istorijaKlijent=response.data['Istorija'];
        state.istorijaKlijent.forEach(element => {
            element.istorija.forEach(ele => {
                var reci=ele.datum.split(' ');
                ele.datum=reci[1]+' '+reci[2]+' '+reci[3];
            });
        });
    })
    },
    'GET_PORUKE'(state){
        axios
      .get('http://localhost:5000/getPoruke')
      .then(response => (state.poruke=response.data['Poruke'])
      )
    },
    'GET_POSLATE'(state){
        axios
      .get('http://localhost:5000/getPoslate')
      .then(response => (state.poslate=response.data['Poslate'])
      )
    },
    'GET_NEWS'(state){
        axios
      .get('http://localhost:5000/getNews')
      .then(response => (state.vesti=response.data['Vesti'])
      )
    },
    'POST_ODGOVOR'(state,ele){
        axios
        .post('http://localhost:5000/postOdgovor', {
          sadrzaj: ''+ele[0],
          za: '' + ele[1],
          naslov: ''+ele[2],
          poruka: ele[3]
        })
    },
    'PROVERA_EMAIL'(state,email){
        axios
            .get(' http://apilayer.net/api/check?access_key=98266a86ccdfc5e3276383b8a4a44be3&email='+email+'&smtp=1&format=1')
            .then(res => {
                   state.validan=res.data['mx_found']   
             })
             .catch(error => {
                  console.log(error)
              })
            
        }
};

const actions={
    poseta({state,commit}){
        commit('COUNTER');
        console.log('Povecao'+state.counter);
    },
    convert({state,commit},from){
        
        if(from[0]){
            commit('U_DIN',from[1]);
        }else{
            commit('IZ_DIN',from[1]);
        }
    },
    getKurs({state,commit}){
        commit('GET_KURS');
        console.log('Poslao sam zahtev na server');
    },
    postPoruka({state,commit},ele){
        commit('POST_PORUKA',ele);
    },
    addValuta({state,commit},valuta){
        commit('ADD_VALUTA',valuta);
    },
    postKurs({state,commit},lista){
        commit('POST_KURS',lista);
    },
    deleteValuta({state,commit},valuta){
        commit('DELETE_VALUTA',valuta);
    },
    getHistory({state,commit}){
        commit('GET_HISTORY');
    },
    getHistoryKlijent({state,commit}){
        commit('GET_10_HISTORY');
    },
    getPoruke({state,commit}){
        commit('GET_PORUKE');
    },
    postOdgovor({state,commit},ele){
        commit('POST_ODGOVOR',ele);
    },
    getPoslate({state,commit}){
        commit('GET_POSLATE');
    },
    proveriEmail({state,commit},email){
        commit('PROVERA_EMAIL',email)
    },
    getNews({commit}){
        commit('GET_NEWS');
    }
};

export default{
    state, 
    mutations,
    actions
}
