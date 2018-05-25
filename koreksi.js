var nama = 'minzard';
var peran = '';
  if (nama === ''){
    console.log('nama tidak boleh kosong')
  }else{
    console.log('Selamat datang di dunia Proxytia, ' + nama)
  }

  if(peran == 'Ksatria'){
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
  }else if (peran == 'ksatria'){
    console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!')
  }else if (peran == 'Tabib'){
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
  }else if (peran == 'tabib'){
    console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.')
  }else if (peran == 'Penyihir'){
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
  }else if (peran == 'penyihir'){
    console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
  }else {
    console.log('Pilih peranmu untuk memulai game')
  }