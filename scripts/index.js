if (document['documentElement']['clientWidth'] < 700) {
   document['getElementById']('elem')['style']['display'] = 'none';
   document['getElementById']('menu')['style']['display'] = 'none'
};
if (document['documentElement']['clientWidth'] < 700) {
   document['getElementById']('mobile')['style']['display'] = 'flex'
}





const resultMathButton = document['querySelector']('.math-button');

function areaRectangle() {
   var _0xa4ccx3 = 1 * document['formMath']['homeScored']['value'];
   var _0xa4ccx4 = 1 * document['formMath']['awayScored']['value'];
   var _0xa4ccx5 = 1 * document['formMath']['homeMissed']['value'];
   var _0xa4ccx6 = 1 * document['formMath']['awayMissed']['value'];
   var _0xa4ccx7 = 1 * document['formMath']['selectAttackHome']['value'];
   var _0xa4ccx8 = 1 * document['formMath']['selectAttackAway']['value'];
   var _0xa4ccx9 = 1 * document['formMath']['selectDefHome']['value'];
   var _0xa4ccxa = 1 * document['formMath']['selectDefAway']['value'];
   var _0xa4ccxb = 1 * document['formMath']['teamClassHome']['value'];
   var _0xa4ccxc = 1 * document['formMath']['teamClassAway']['value'];
   var _0xa4ccxd = (_0xa4ccx3 / 5 + _0xa4ccx6 / 5) - 1.3;
   var _0xa4ccxe = (_0xa4ccx4 / 5 + _0xa4ccx5 / 5) - 1.3;
   var _0xa4ccxf = _0xa4ccx7 - _0xa4ccxa;
   var _0xa4ccx10 = _0xa4ccx8 - _0xa4ccx9;
   var _0xa4ccx11 = _0xa4ccxb - _0xa4ccxc;
   var _0xa4ccx12 = _0xa4ccxd;
   var _0xa4ccx13 = _0xa4ccxe;
   var _0xa4ccx12 = _0xa4ccx12 + (0);
   var _0xa4ccx13 = _0xa4ccx13 - (0);
   if (_0xa4ccxf === 1) {
       _0xa4ccx12 = _0xa4ccx12 * 0.8
   };
   if (_0xa4ccxf === 2) {
       _0xa4ccx12 = _0xa4ccx12 * 0.5
   };
   if (_0xa4ccxf === 3) {
       _0xa4ccx12 = _0xa4ccx12 * 0.1
   };
   if (_0xa4ccxf === -1) {
       _0xa4ccx12 = _0xa4ccx12 * 1.1
   };
   if (_0xa4ccxf === -2) {
       _0xa4ccx12 = _0xa4ccx12 * 1.5
   };
   if (_0xa4ccxf === -3) {
       _0xa4ccx12 = _0xa4ccx12 * 1.8
   };
   if (_0xa4ccx10 === 1) {
       _0xa4ccx13 = _0xa4ccx13 * 0.8
   };
   if (_0xa4ccx10 === 2) {
       _0xa4ccx13 = _0xa4ccx13 * 0.5
   };
   if (_0xa4ccx10 === 3) {
       _0xa4ccx13 = _0xa4ccx13 * 0.1
   };
   if (_0xa4ccx10 === -1) {
       _0xa4ccx13 = _0xa4ccx13 * 1.1
   };
   if (_0xa4ccx10 === -2) {
       _0xa4ccx13 = _0xa4ccx13 * 1.5
   };
   if (_0xa4ccx10 === -3) {
       _0xa4ccx13 = _0xa4ccx13 * 1.8
   };
   if (_0xa4ccx11 === 4) {
       _0xa4ccx12 = _0xa4ccx12 + (1 * 2)
   };
   _0xa4ccx13 = _0xa4ccx13 - (1 * 2);
   if (_0xa4ccx11 === 3) {
       _0xa4ccx12 = _0xa4ccx12 + (1 * 1.5)
   };
   _0xa4ccx13 = _0xa4ccx13 - (1 * 1.5);
   if (_0xa4ccx11 === 2) {
       _0xa4ccx12 = _0xa4ccx12 + (1 * 1)
   };
   _0xa4ccx13 = _0xa4ccx13 - (1 * 1);
   if (_0xa4ccx11 === 1) {
       _0xa4ccx12 = _0xa4ccx12 + (1 * 0.8)
   };
   _0xa4ccx13 = _0xa4ccx13 - (1 * 0.8);
   if (_0xa4ccx11 === -1) {
       _0xa4ccx12 = _0xa4ccx12 - (1 * 0.8)
   };
   _0xa4ccx13 = _0xa4ccx13 + (1 * 0.8);
   if (_0xa4ccx11 === -2) {
       _0xa4ccx12 = _0xa4ccx12 - (1 * 1)
   };
   _0xa4ccx13 = _0xa4ccx13 + (1 * 1);
   if (_0xa4ccx11 === -3) {
       _0xa4ccx12 = _0xa4ccx12 - (1 * 1.5)
   };
   _0xa4ccx13 = _0xa4ccx13 + (1 * 1.5);
   if (_0xa4ccx11 === -4) {
       _0xa4ccx12 = _0xa4ccx12 - (1 * 2)
   };
   _0xa4ccx13 = _0xa4ccx13 + (1 * 2);
   if (_0xa4ccx11 === 4) {
       _0xa4ccx13 = _0xa4ccx13 - (1 * 2)
   };
   if (_0xa4ccx11 === 3) {
       _0xa4ccx13 = _0xa4ccx13 - (1 * 1.5)
   };
   if (_0xa4ccx11 === 2) {
       _0xa4ccx13 = _0xa4ccx13 - (1 * 1)
   };
   if (_0xa4ccx11 === 1) {
       _0xa4ccx13 = _0xa4ccx13 - (1 * 0.8)
   };
   if (_0xa4ccx11 === -1) {
       _0xa4ccx13 = _0xa4ccx13 + (1 * 0.8)
   };
   if (_0xa4ccx11 === -2) {
       _0xa4ccx13 = _0xa4ccx13 + (1 * 1)
   };
   if (_0xa4ccx11 === -3) {
       _0xa4ccx13 = _0xa4ccx13 + (1 * 1.5)
   };
   if (_0xa4ccx11 === -4) {
       _0xa4ccx13 = _0xa4ccx13 + (1 * 2)
   };
   if (_0xa4ccx12 < 0.1) {
       _0xa4ccx12 = 0.1
   };
   if (_0xa4ccx13 < 0.1) {
       _0xa4ccx13 = 0.1
   };
   return {
       mm: _0xa4ccx12['toFixed'](1),
       yy: _0xa4ccx13['toFixed'](1)
   }
}

function PoissonDistrib(_0xa4ccx15, _0xa4ccx16) {
   const _0xa4ccx17 = areaRectangle();
   const _0xa4ccx18 = _0xa4ccx17['mm'];
   const _0xa4ccx19 = _0xa4ccx17['yy'];
   console['log'](_0xa4ccx17['mm']);
   console['log'](_0xa4ccx17['yy']);
   console['log'](_0xa4ccx18);
   console['log'](_0xa4ccx19);
   var _0xa4ccxf = _0xa4ccx18;
   var _0xa4ccx1a = _0xa4ccx19;
   const _0xa4ccxc = [0, 1, 2, 3, 4, 5, 6, 7];
   var _0xa4ccx1b = [0, 1, 2, 3, 4, 5, 6, 7];
   var _0xa4ccx1c = _0xa4ccxc['map']((_0xa4ccx10) => {
       return (Fixed(PoissonTerm(_0xa4ccxf, [_0xa4ccx10]), 8, 4) * 100)['toFixed'](2)
   });
   var _0xa4ccx1d = _0xa4ccx1b['map']((_0xa4ccx10) => {
       return Fixed(PoissonTerm(_0xa4ccx1a, [_0xa4ccx10]), 8, 4)
   });
   var _0xa4ccx1e = [];
   for (var _0xa4ccx10 = 0; _0xa4ccx10 < _0xa4ccx1c['length']; _0xa4ccx10++) {
       for (var _0xa4ccxb = 0; _0xa4ccxb < _0xa4ccx1d['length']; _0xa4ccxb++) {
           _0xa4ccx1e['push'](_0xa4ccx1c[_0xa4ccx10] * _0xa4ccx1d[_0xa4ccxb])
       }
   };
   console['log'](_0xa4ccx1e);
   var _0xa4ccx1f = _0xa4ccx20(_0xa4ccx1e);

   function _0xa4ccx20(_0xa4ccx1e) {
       var _0xa4ccx1f = _0xa4ccx1e[0];
       for (var _0xa4ccxa = 0; _0xa4ccxa < _0xa4ccx1e['length']; _0xa4ccxa++) {
           if (_0xa4ccx1f < _0xa4ccx1e[_0xa4ccxa]) {
               _0xa4ccx1f = _0xa4ccx1e[_0xa4ccxa]
           }
       };
       return _0xa4ccx1f
   }
   console['log'](_0xa4ccx1f);
   const _0xa4ccx21 = Math['max'](..._0xa4ccx1e);
   const _0xa4ccx22 = _0xa4ccx1e['indexOf'](_0xa4ccx21);
   console['log'](_0xa4ccx22);
   const _0xa4ccx23 = ['0 - 0', '0 - 1', '0 - 2', '0 -3', '0 - 4', '0 - 5', '0 - 6', '0 - 7', '1 - 0', '1 - 1', '1 - 2', '1 - 3', '1 - 4', '1 - 5', '1 - 6', '1 - 7', '2 - 0', '2 - 1', '2 - 2', '2 - 3', '2 - 4', '2 - 5', '2 - 6', '2 - 7', '3 - 0', '3 - 1', '3 - 2', '3 - 3', '3 - 4', '3 - 5', '3 - 6', '3 - 7', '4 - 0', '4 - 1', '4 - 2', '4 - 3', '4 - 4', '4 - 5', '4 - 6', '4 - 7', '5 - 0', '5 - 1', '5 - 2', '5 - 3', '5 - 4', '5 - 5', '5 - 6', '5 - 7', '6 - 0', '6 - 1', '6 - 2', '6 - 3', '6 - 4', '6 - 5', '6 - 6', '6 - 7', '7 - 0', '7 - 1', '7 - 2', '7 - 3', '7 - 4', '7 - 5', '7 - 6', '7 - 7'];
   const _0xa4ccx24 = _0xa4ccx23[_0xa4ccx22];
   const _0xa4ccx25 = document['querySelector']('.line__result-goalscore');
   _0xa4ccx25['textContent'] = _0xa4ccx24;
   console['log'](_0xa4ccx24);
   const _0xa4ccx26 = _0xa4ccx1e[8];
   const _0xa4ccx27 = _0xa4ccx1e[16];
   const _0xa4ccx28 = _0xa4ccx1e[17];
   const _0xa4ccx29 = _0xa4ccx1e[24];
   const _0xa4ccx2a = _0xa4ccx1e[25];
   const _0xa4ccx2b = _0xa4ccx1e[26];
   const _0xa4ccx2c = _0xa4ccx1e[32];
   const _0xa4ccx2d = _0xa4ccx1e[33];
   const _0xa4ccx2e = _0xa4ccx1e[34];
   const _0xa4ccx2f = _0xa4ccx1e[35];
   const _0xa4ccx30 = _0xa4ccx1e[40];
   const _0xa4ccx31 = _0xa4ccx1e[41];
   const _0xa4ccx32 = _0xa4ccx1e[42];
   const _0xa4ccx33 = _0xa4ccx1e[43];
   const _0xa4ccx34 = _0xa4ccx1e[44];
   const _0xa4ccx35 = _0xa4ccx1e[48];
   const _0xa4ccx36 = _0xa4ccx1e[49];
   const _0xa4ccx37 = _0xa4ccx1e[50];
   const _0xa4ccx38 = _0xa4ccx1e[51];
   const _0xa4ccx39 = _0xa4ccx1e[52];
   const _0xa4ccx3a = _0xa4ccx1e[53];
   const _0xa4ccx3b = _0xa4ccx1e[56];
   const _0xa4ccx3c = _0xa4ccx1e[57];
   const _0xa4ccx3d = _0xa4ccx1e[58];
   const _0xa4ccx3e = _0xa4ccx1e[59];
   const _0xa4ccx3f = _0xa4ccx1e[60];
   const _0xa4ccx40 = _0xa4ccx1e[61];
   const _0xa4ccx41 = _0xa4ccx1e[62];
   const _0xa4ccx42 = _0xa4ccx1e[0];
   const _0xa4ccx43 = _0xa4ccx1e[9];
   const _0xa4ccx44 = _0xa4ccx1e[18];
   const _0xa4ccx45 = _0xa4ccx1e[27];
   const _0xa4ccx46 = _0xa4ccx1e[36];
   const _0xa4ccx47 = _0xa4ccx1e[45];
   const _0xa4ccx48 = _0xa4ccx1e[54];
   const _0xa4ccx49 = _0xa4ccx1e[63];
   const _0xa4ccx4a = _0xa4ccx1e[1];
   const _0xa4ccx4b = _0xa4ccx1e[2];
   const _0xa4ccx4c = _0xa4ccx1e[3];
   const _0xa4ccx4d = _0xa4ccx1e[4];
   const _0xa4ccx4e = _0xa4ccx1e[5];
   const _0xa4ccx4f = _0xa4ccx1e[6];
   const _0xa4ccx50 = _0xa4ccx1e[7];
   const _0xa4ccx51 = _0xa4ccx1e[10];
   const _0xa4ccx52 = _0xa4ccx1e[11];
   const _0xa4ccx53 = _0xa4ccx1e[12];
   const _0xa4ccx54 = _0xa4ccx1e[13];
   const _0xa4ccx55 = _0xa4ccx1e[14];
   const _0xa4ccx56 = _0xa4ccx1e[15];
   const _0xa4ccx57 = _0xa4ccx1e[19];
   const _0xa4ccx58 = _0xa4ccx1e[20];
   const _0xa4ccx59 = _0xa4ccx1e[21];
   const _0xa4ccx5a = _0xa4ccx1e[22];
   const _0xa4ccx5b = _0xa4ccx1e[23];
   const _0xa4ccx5c = _0xa4ccx1e[28];
   const _0xa4ccx5d = _0xa4ccx1e[29];
   const _0xa4ccx5e = _0xa4ccx1e[30];
   const _0xa4ccx5f = _0xa4ccx1e[31];
   const _0xa4ccx60 = _0xa4ccx1e[37];
   const _0xa4ccx61 = _0xa4ccx1e[38];
   const _0xa4ccx62 = _0xa4ccx1e[39];
   const _0xa4ccx63 = _0xa4ccx1e[46];
   const _0xa4ccx64 = _0xa4ccx1e[47];
   const _0xa4ccx65 = _0xa4ccx1e[55];
   const _0xa4ccx66 = _0xa4ccx26 + _0xa4ccx27 + _0xa4ccx28 + _0xa4ccx29 + _0xa4ccx2a + _0xa4ccx2b + _0xa4ccx2c + _0xa4ccx2d + _0xa4ccx2e + _0xa4ccx2f + _0xa4ccx31 + _0xa4ccx30 + _0xa4ccx32 + _0xa4ccx33 + _0xa4ccx34 + _0xa4ccx35 + _0xa4ccx36 + _0xa4ccx37 + _0xa4ccx38 + _0xa4ccx39 + _0xa4ccx3a + _0xa4ccx3b + _0xa4ccx3c + _0xa4ccx3d + _0xa4ccx3e + _0xa4ccx3f + _0xa4ccx40 + _0xa4ccx41;
   const _0xa4ccx67 = document['querySelector']('.win-persent');
   _0xa4ccx67['textContent'] = _0xa4ccx66['toFixed'](2) + ' %';
   const _0xa4ccx68 = document['querySelector']('.line-winHome-persent_mod');
   _0xa4ccx68['textContent'] = _0xa4ccx66['toFixed'](2) + ' %';
   const _0xa4ccx69 = document['querySelector']('.line-winHome-persent');
   _0xa4ccx69['textContent'] = _0xa4ccx66['toFixed'](2) + ' %';
   const _0xa4ccx6a = 1.15 / (_0xa4ccx66 / 100);
   const _0xa4ccx6b = document['querySelector']('.profit-kef');
   _0xa4ccx6b['textContent'] = _0xa4ccx6a['toFixed'](2);
   const _0xa4ccx6c = document['querySelector']('.profit-kef_mod');
   _0xa4ccx6c['textContent'] = _0xa4ccx6a['toFixed'](2);
   const _0xa4ccx6d = _0xa4ccx4a + _0xa4ccx4b + _0xa4ccx4c + _0xa4ccx4d + _0xa4ccx4e + _0xa4ccx4f + _0xa4ccx50 + _0xa4ccx51 + _0xa4ccx52 + _0xa4ccx53 + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx57 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx65;
   const _0xa4ccx6e = document['querySelector']('.awayWin-persent');
   _0xa4ccx6e['textContent'] = _0xa4ccx6d['toFixed'](2) + ' %';
   const _0xa4ccx6f = document['querySelector']('.away-win');
   _0xa4ccx6f['textContent'] = _0xa4ccx6d['toFixed'](2) + ' %';
   const _0xa4ccx70 = document['querySelector']('.away-win_mod');
   _0xa4ccx70['textContent'] = _0xa4ccx6d['toFixed'](2) + ' %';
   const _0xa4ccx71 = 1.15 / (_0xa4ccx6d / 100);
   const _0xa4ccx72 = document['querySelector']('.away-win-profit');
   _0xa4ccx72['textContent'] = _0xa4ccx71['toFixed'](2);
   const _0xa4ccx73 = document['querySelector']('.away-win-profit_mod');
   _0xa4ccx73['textContent'] = _0xa4ccx71['toFixed'](2);
   const _0xa4ccx74 = 100 - _0xa4ccx66['toFixed'](2) - _0xa4ccx6d['toFixed'](2);
   const _0xa4ccx75 = document['querySelector']('.draw-persent');
   _0xa4ccx75['textContent'] = _0xa4ccx74['toFixed'](2) + ' %';
   const _0xa4ccx76 = document['querySelector']('.draw');
   _0xa4ccx76['textContent'] = _0xa4ccx74['toFixed'](2) + ' %';
   const _0xa4ccx77 = 1.15 / (_0xa4ccx74 / 100);
   const _0xa4ccx78 = document['querySelector']('.draw-profit');
   _0xa4ccx78['textContent'] = _0xa4ccx77['toFixed'](2);
   const _0xa4ccx79 = document['querySelector']('.draw_mod');
   _0xa4ccx79['textContent'] = _0xa4ccx74['toFixed'](2) + ' %';
   const _0xa4ccx7a = document['querySelector']('.draw-profit_mod');
   _0xa4ccx7a['textContent'] = _0xa4ccx77['toFixed'](2);
   const _0xa4ccx7b = _0xa4ccx66 + _0xa4ccx74;
   const _0xa4ccx7c = document['querySelector']('.homeX');
   _0xa4ccx7c['textContent'] = _0xa4ccx7b['toFixed'](2) + ' %';
   const _0xa4ccx7d = document['querySelector']('.homeX_mod');
   _0xa4ccx7d['textContent'] = _0xa4ccx7b['toFixed'](2) + ' %';
   const _0xa4ccx7e = 1.15 / (_0xa4ccx7b / 100);
   const _0xa4ccx7f = document['querySelector']('.homeX-profit');
   _0xa4ccx7f['textContent'] = _0xa4ccx7e['toFixed'](2);
   const _0xa4ccx80 = document['querySelector']('.homeX-profit_mod');
   _0xa4ccx80['textContent'] = _0xa4ccx7e['toFixed'](2);
   const _0xa4ccx81 = _0xa4ccx6d + _0xa4ccx74;
   const _0xa4ccx82 = document['querySelector']('.awayX');
   _0xa4ccx82['textContent'] = _0xa4ccx81['toFixed'](2) + ' %';
   const _0xa4ccx83 = document['querySelector']('.awayX_mod');
   _0xa4ccx83['textContent'] = _0xa4ccx81['toFixed'](2) + ' %';
   const _0xa4ccx84 = 1.15 / (_0xa4ccx81 / 100);
   const _0xa4ccx85 = document['querySelector']('.awayX-profit');
   _0xa4ccx85['textContent'] = _0xa4ccx84['toFixed'](2);
   const _0xa4ccx86 = document['querySelector']('.awayX-profit_mod');
   _0xa4ccx86['textContent'] = _0xa4ccx84['toFixed'](2);
   const _0xa4ccx87 = 100 - _0xa4ccx74;
   const _0xa4ccx88 = document['querySelector']('.notDraw');
   _0xa4ccx88['textContent'] = _0xa4ccx87['toFixed'](2) + ' %';
   const _0xa4ccx89 = document['querySelector']('.notDraw_mod');
   _0xa4ccx89['textContent'] = _0xa4ccx87['toFixed'](2) + ' %';
   const _0xa4ccx8a = 1.15 / (_0xa4ccx87 / 100);
   const _0xa4ccx8b = document['querySelector']('.notDraw-profit');
   _0xa4ccx8b['textContent'] = _0xa4ccx8a['toFixed'](2);
   const _0xa4ccx8c = document['querySelector']('.notDraw-profit_mod');
   _0xa4ccx8c['textContent'] = _0xa4ccx8a['toFixed'](2);
   const _0xa4ccx8d = document['querySelector']('.homeNull');
   const _0xa4ccx8e = ((_0xa4ccx66 + _0xa4ccx74)) / 1.15;
   const _0xa4ccx8f = document['querySelector']('.homeNull-profit');
   const _0xa4ccx90 = document['querySelector']('.awayNull');
   const _0xa4ccx91 = 1.15 / ((_0xa4ccx6d + _0xa4ccx74) / 100);
   const _0xa4ccx92 = document['querySelector']('.awayNull-profit');
   const _0xa4ccx93 = _0xa4ccx27 + _0xa4ccx29 + _0xa4ccx2a + _0xa4ccx2c + _0xa4ccx2d + _0xa4ccx2e + _0xa4ccx30 + _0xa4ccx31 + _0xa4ccx32 + _0xa4ccx33 + _0xa4ccx35 + _0xa4ccx36 + _0xa4ccx37 + _0xa4ccx38 + _0xa4ccx39 + _0xa4ccx3b + _0xa4ccx3c + _0xa4ccx3d + _0xa4ccx3e + _0xa4ccx3f + _0xa4ccx40;
   const _0xa4ccx94 = document['querySelector']('.home-minusOne');
   const _0xa4ccx95 = 1.15 / (_0xa4ccx93 / 100);
   const _0xa4ccx96 = document['querySelector']('.home-minusOne-profit');
   const _0xa4ccx97 = _0xa4ccx4b + _0xa4ccx4c + _0xa4ccx52 + _0xa4ccx4d + _0xa4ccx53 + _0xa4ccx58 + _0xa4ccx4e + _0xa4ccx54 + _0xa4ccx59 + _0xa4ccx5d + _0xa4ccx4f + _0xa4ccx55 + _0xa4ccx5a + _0xa4ccx5e + _0xa4ccx61 + _0xa4ccx50 + _0xa4ccx56 + _0xa4ccx5b + _0xa4ccx5f + _0xa4ccx62 + _0xa4ccx64;
   const _0xa4ccx98 = document['querySelector']('.away-minusOne');
   const _0xa4ccx99 = 1.15 / (_0xa4ccx97 / 100);
   const _0xa4ccx9a = document['querySelector']('.away-minusOne-profit');
   const _0xa4ccx9b = document['querySelector']('.home-minusOneFive');
   _0xa4ccx9b['textContent'] = _0xa4ccx93['toFixed'](2) + ' %';
   const _0xa4ccx9c = document['querySelector']('.home-minusOneFive-profit');
   const _0xa4ccx9d = document['querySelector']('.home-minusOneFive_mod');
   _0xa4ccx9d['textContent'] = _0xa4ccx93['toFixed'](2) + ' %';
   const _0xa4ccx9e = document['querySelector']('.home-minusOneFive-profit_mod');
   const _0xa4ccx9f = 1.15 / (_0xa4ccx93 / 100);
   _0xa4ccx9c['textContent'] = _0xa4ccx9f['toFixed'](2);
   _0xa4ccx9e['textContent'] = _0xa4ccx9f['toFixed'](2);
   const _0xa4ccxa0 = document['querySelector']('.away-minusOneFive');
   _0xa4ccxa0['textContent'] = _0xa4ccx97['toFixed'](2) + ' %';
   const _0xa4ccxa1 = document['querySelector']('.away-minusOneFive-profit');
   const _0xa4ccxa2 = document['querySelector']('.away-minusOneFive_mod');
   _0xa4ccxa2['textContent'] = _0xa4ccx97['toFixed'](2) + ' %';
   const _0xa4ccxa3 = document['querySelector']('.away-minusOneFive-profit_mod');
   const _0xa4ccxa4 = 1.15 / (_0xa4ccx97 / 100);
   _0xa4ccxa1['textContent'] = _0xa4ccxa4['toFixed'](2);
   _0xa4ccxa3['textContent'] = _0xa4ccxa4['toFixed'](2);
   const _0xa4ccxa5 = _0xa4ccx29 + _0xa4ccx2c + _0xa4ccx2d + _0xa4ccx30 + _0xa4ccx31 + _0xa4ccx32 + _0xa4ccx35 + _0xa4ccx36 + _0xa4ccx37 + _0xa4ccx38 + _0xa4ccx3b + _0xa4ccx3c + _0xa4ccx3d + _0xa4ccx3e + _0xa4ccx3f;
   const _0xa4ccxa6 = document['querySelector']('.home-minusTwo');
   const _0xa4ccxa7 = document['querySelector']('.home-minusTwo-profit');
   const _0xa4ccxa8 = 1.15 / (_0xa4ccxa5 / 100);
   const _0xa4ccxa9 = _0xa4ccx4c + _0xa4ccx4d + _0xa4ccx53 + _0xa4ccx4e + _0xa4ccx54 + _0xa4ccx59 + _0xa4ccx4f + _0xa4ccx55 + _0xa4ccx5a + _0xa4ccx5e + _0xa4ccx50 + _0xa4ccx56 + _0xa4ccx5b + _0xa4ccx5f + _0xa4ccx62;
   const _0xa4ccxaa = document['querySelector']('.away-minusTwo');
   const _0xa4ccxab = document['querySelector']('.away-minusTwo-profit');
   const _0xa4ccxac = 1.15 / (_0xa4ccxa9 / 100);
   const _0xa4ccxad = _0xa4ccx29 + _0xa4ccx2c + _0xa4ccx2d + _0xa4ccx30 + _0xa4ccx31 + _0xa4ccx32 + _0xa4ccx35 + _0xa4ccx36 + _0xa4ccx37 + _0xa4ccx38 + _0xa4ccx3b + _0xa4ccx3c + _0xa4ccx3d + _0xa4ccx3e + _0xa4ccx3f;
   const _0xa4ccxae = document['querySelector']('.home-minusTwoFive');
   _0xa4ccxae['textContent'] = _0xa4ccxad['toFixed'](2) + ' %';
   const _0xa4ccxaf = document['querySelector']('.home-minusTwoFive-profit');
   const _0xa4ccxb0 = document['querySelector']('.home-minusTwoFive_mod');
   _0xa4ccxb0['textContent'] = _0xa4ccxad['toFixed'](2) + ' %';
   const _0xa4ccxb1 = document['querySelector']('.home-minusTwoFive-profit_mod');
   const _0xa4ccxb2 = 1.15 / (_0xa4ccxad / 100);
   _0xa4ccxaf['textContent'] = _0xa4ccxb2['toFixed'](2);
   _0xa4ccxb1['textContent'] = _0xa4ccxb2['toFixed'](2);
   const _0xa4ccxb3 = _0xa4ccx4c + _0xa4ccx4d + _0xa4ccx53 + _0xa4ccx4e + _0xa4ccx54 + _0xa4ccx59 + _0xa4ccx4f + _0xa4ccx55 + _0xa4ccx5a + _0xa4ccx5e + _0xa4ccx50 + _0xa4ccx56 + _0xa4ccx5b + _0xa4ccx5f + _0xa4ccx62;
   const _0xa4ccxb4 = document['querySelector']('.away-minusTwoFive');
   _0xa4ccxb4['textContent'] = _0xa4ccxb3['toFixed'](2) + ' %';
   const _0xa4ccxb5 = document['querySelector']('.away-minusTwoFive-profit');
   const _0xa4ccxb6 = document['querySelector']('.away-minusTwoFive_mod');
   _0xa4ccxb6['textContent'] = _0xa4ccxb3['toFixed'](2) + ' %';
   const _0xa4ccxb7 = document['querySelector']('.away-minusTwoFive-profit_mod');
   const _0xa4ccxb8 = 1.15 / (_0xa4ccxb3 / 100);
   _0xa4ccxb5['textContent'] = _0xa4ccxb8['toFixed'](2);
   _0xa4ccxb7['textContent'] = _0xa4ccxb8['toFixed'](2);
   const _0xa4ccxb9 = _0xa4ccx66 + _0xa4ccx74;
   const _0xa4ccxba = document['querySelector']('.home-plusOne');
   const _0xa4ccxbb = document['querySelector']('.home-plusOne-profit');
   const _0xa4ccxbc = 1.15 / (_0xa4ccxb9 / 100);
   const _0xa4ccxbd = _0xa4ccx6d + _0xa4ccx74;
   const _0xa4ccxbe = document['querySelector']('.away-plusOne');
   const _0xa4ccxbf = document['querySelector']('.away-plusOne-profit');
   const _0xa4ccxc0 = 1.15 / (_0xa4ccxbd / 100);
   const _0xa4ccxc1 = _0xa4ccx66 + _0xa4ccx74 + _0xa4ccx4a + _0xa4ccx51 + _0xa4ccx57 + _0xa4ccx5c + _0xa4ccx60 + _0xa4ccx63 + _0xa4ccx65;
   const _0xa4ccxc2 = document['querySelector']('.home-plusOneFive');
   _0xa4ccxc2['textContent'] = _0xa4ccxc1['toFixed'](2) + ' %';
   const _0xa4ccxc3 = document['querySelector']('.home-plusOneFive-profit');
   const _0xa4ccxc4 = document['querySelector']('.home-plusOneFive_mod');
   _0xa4ccxc4['textContent'] = _0xa4ccxc1['toFixed'](2) + ' %';
   const _0xa4ccxc5 = document['querySelector']('.home-plusOneFive-profit_mod');
   const _0xa4ccxc6 = 1.15 / (_0xa4ccxc1 / 100);
   _0xa4ccxc3['textContent'] = _0xa4ccxc6['toFixed'](2);
   _0xa4ccxc5['textContent'] = _0xa4ccxc6['toFixed'](2);
   const _0xa4ccxc7 = _0xa4ccx6d + _0xa4ccx74 + _0xa4ccx26 + _0xa4ccx28 + _0xa4ccx2b + _0xa4ccx2f + _0xa4ccx34 + _0xa4ccx3a + _0xa4ccx41;
   const _0xa4ccxc8 = document['querySelector']('.away-plusOneFive');
   _0xa4ccxc8['textContent'] = _0xa4ccxc7['toFixed'](2) + ' %';
   const _0xa4ccxc9 = document['querySelector']('.away-plusOneFive-profit');
   const _0xa4ccxca = document['querySelector']('.away-plusOneFive_mod');
   _0xa4ccxca['textContent'] = _0xa4ccxc7['toFixed'](2) + ' %';
   const _0xa4ccxcb = document['querySelector']('.away-plusOneFive-profit_mod');
   const _0xa4ccxcc = 1.15 / (_0xa4ccxc7 / 100);
   _0xa4ccxc9['textContent'] = _0xa4ccxcc['toFixed'](2);
   _0xa4ccxcb['textContent'] = _0xa4ccxcc['toFixed'](2);
   const _0xa4ccxcd = _0xa4ccx66 + _0xa4ccx74 + _0xa4ccx4a + _0xa4ccx51 + _0xa4ccx57 + _0xa4ccx5c + _0xa4ccx60 + _0xa4ccx63 + _0xa4ccx65;
   const _0xa4ccxce = document['querySelector']('.home-plusTwo');
   const _0xa4ccxcf = document['querySelector']('.home-plusTwo-profit');
   const _0xa4ccxd0 = 1.15 / (_0xa4ccxcd / 100);
   const _0xa4ccxd1 = _0xa4ccx6d + _0xa4ccx74 + _0xa4ccx26 + _0xa4ccx28 + _0xa4ccx2b + _0xa4ccx2f + _0xa4ccx34 + _0xa4ccx3a + _0xa4ccx41;
   const _0xa4ccxd2 = document['querySelector']('.away-plusTwo');
   const _0xa4ccxd3 = document['querySelector']('.away-plusTwo-profit');
   const _0xa4ccxd4 = 1.15 / (_0xa4ccxd1 / 100);
   const _0xa4ccxd5 = _0xa4ccx66 + _0xa4ccx74 + _0xa4ccx4a + _0xa4ccx51 + _0xa4ccx57 + _0xa4ccx5c + _0xa4ccx60 + _0xa4ccx63 + _0xa4ccx65 + _0xa4ccx4b + _0xa4ccx52 + _0xa4ccx58 + _0xa4ccx5d + _0xa4ccx61 + _0xa4ccx64;
   const _0xa4ccxd6 = document['querySelector']('.home-plusTwoFive');
   _0xa4ccxd6['textContent'] = _0xa4ccxd5['toFixed'](2) + ' %';
   const _0xa4ccxd7 = document['querySelector']('.home-plusTwoFive-profit');
   const _0xa4ccxd8 = document['querySelector']('.home-plusTwoFive_mod');
   _0xa4ccxd8['textContent'] = _0xa4ccxd5['toFixed'](2) + ' %';
   const _0xa4ccxd9 = document['querySelector']('.home-plusTwoFive-profit_mod');
   const _0xa4ccxda = 1.15 / (_0xa4ccxd5 / 100);
   _0xa4ccxd7['textContent'] = _0xa4ccxda['toFixed'](2);
   _0xa4ccxd9['textContent'] = _0xa4ccxda['toFixed'](2);
   const _0xa4ccxdb = _0xa4ccx6d + _0xa4ccx74 + _0xa4ccx26 + _0xa4ccx28 + _0xa4ccx2b + _0xa4ccx2f + _0xa4ccx34 + _0xa4ccx3a + _0xa4ccx41 + _0xa4ccx27 + _0xa4ccx2a + _0xa4ccx2e + _0xa4ccx33 + _0xa4ccx39 + _0xa4ccx40;
   const _0xa4ccxdc = document['querySelector']('.away-plusTwoFive');
   _0xa4ccxdc['textContent'] = _0xa4ccxdb['toFixed'](2) + ' %';
   const _0xa4ccxdd = document['querySelector']('.away-plusTwoFive-profit');
   const _0xa4ccxde = document['querySelector']('.away-plusTwoFive_mod');
   _0xa4ccxde['textContent'] = _0xa4ccxdb['toFixed'](2) + ' %';
   const _0xa4ccxdf = document['querySelector']('.away-plusTwoFive-profit_mod');
   const _0xa4ccxe0 = 1.15 / (_0xa4ccxdb / 100);
   _0xa4ccxdd['textContent'] = _0xa4ccxe0['toFixed'](2);
   _0xa4ccxdf['textContent'] = _0xa4ccxe0['toFixed'](2);
   const _0xa4ccxe1 = (_0xa4ccx66 + (_0xa4ccx74 - _0xa4ccx42) + _0xa4ccx6d);
   const _0xa4ccxe2 = document['querySelector']('.totalMore-nullFive');
   _0xa4ccxe2['textContent'] = _0xa4ccxe1['toFixed'](2) + ' %';
   const _0xa4ccxe3 = document['querySelector']('.totalMore-nullFive-profit');
   const _0xa4ccxe4 = document['querySelector']('.totalMore-nullFive_mod');
   _0xa4ccxe4['textContent'] = _0xa4ccxe1['toFixed'](2) + ' %';
   const _0xa4ccxe5 = document['querySelector']('.totalMore-nullFive-profit_mod');
   const _0xa4ccxe6 = 1.15 / (_0xa4ccxe1 / 100);
   _0xa4ccxe3['textContent'] = _0xa4ccxe6['toFixed'](2);
   _0xa4ccxe5['textContent'] = _0xa4ccxe6['toFixed'](2);
   const _0xa4ccxe7 = 100 - _0xa4ccxe1;
   const _0xa4ccxe8 = document['querySelector']('.totalLess-nullFive');
   _0xa4ccxe8['textContent'] = _0xa4ccxe7['toFixed'](2) + ' %';
   const _0xa4ccxe9 = document['querySelector']('.totalLess-nullFive-profit');
   const _0xa4ccxea = document['querySelector']('.totalLess-nullFive_mod');
   _0xa4ccxea['textContent'] = _0xa4ccxe7['toFixed'](2) + ' %';
   const _0xa4ccxeb = document['querySelector']('.totalLess-nullFive-profit_mod');
   const _0xa4ccxec = 1.15 / (_0xa4ccxe7 / 100);
   _0xa4ccxe9['textContent'] = _0xa4ccxec['toFixed'](2);
   _0xa4ccxeb['textContent'] = _0xa4ccxec['toFixed'](2);
   const _0xa4ccxed = _0xa4ccx43 + _0xa4ccx28 + _0xa4ccx2a + _0xa4ccx2d + _0xa4ccx31 + _0xa4ccx36 + _0xa4ccx3c + _0xa4ccx51 + _0xa4ccx52 + _0xa4ccx53 + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx44 + _0xa4ccx57 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx2b + _0xa4ccx2e + _0xa4ccx32 + _0xa4ccx37 + _0xa4ccx3d + _0xa4ccx45 + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx2f + _0xa4ccx33 + _0xa4ccx38 + _0xa4ccx3e + _0xa4ccx46 + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx34 + _0xa4ccx39 + _0xa4ccx3f + _0xa4ccx47 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx3a + _0xa4ccx40 + _0xa4ccx48 + _0xa4ccx65 + _0xa4ccx41 + _0xa4ccx49 + _0xa4ccx27 + _0xa4ccx29 + _0xa4ccx2c + _0xa4ccx30 + _0xa4ccx35 + _0xa4ccx3b + _0xa4ccx4b + _0xa4ccx4c + _0xa4ccx4d + _0xa4ccx4e + _0xa4ccx4f + _0xa4ccx50;
   const _0xa4ccxee = document['querySelector']('.totalMore-one');
   const _0xa4ccxef = document['querySelector']('.totalMore-one-profit');
   const _0xa4ccxf0 = 1.15 / (_0xa4ccxed / 100);
   const _0xa4ccxf1 = 100 - _0xa4ccxed;
   const _0xa4ccxf2 = document['querySelector']('.totalLess-one');
   const _0xa4ccxf3 = document['querySelector']('.totalLess-one-profit');
   const _0xa4ccxf4 = 1.15 / (_0xa4ccxf1 / 100);
   const _0xa4ccxf5 = _0xa4ccx43 + _0xa4ccx28 + _0xa4ccx2a + _0xa4ccx2d + _0xa4ccx31 + _0xa4ccx36 + _0xa4ccx3c + _0xa4ccx51 + _0xa4ccx52 + _0xa4ccx53 + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx44 + _0xa4ccx57 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx2b + _0xa4ccx2e + _0xa4ccx32 + _0xa4ccx37 + _0xa4ccx3d + _0xa4ccx45 + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx2f + _0xa4ccx33 + _0xa4ccx38 + _0xa4ccx3e + _0xa4ccx46 + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx34 + _0xa4ccx39 + _0xa4ccx3f + _0xa4ccx47 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx3a + _0xa4ccx40 + _0xa4ccx48 + _0xa4ccx65 + _0xa4ccx41 + _0xa4ccx49 + _0xa4ccx27 + _0xa4ccx29 + _0xa4ccx2c + _0xa4ccx30 + _0xa4ccx35 + _0xa4ccx3b + _0xa4ccx4b + _0xa4ccx4c + _0xa4ccx4d + _0xa4ccx4e + _0xa4ccx4f + _0xa4ccx50;
   const _0xa4ccxf6 = document['querySelector']('.totalMore-oneFive');
   _0xa4ccxf6['textContent'] = _0xa4ccxf5['toFixed'](2) + ' %';
   const _0xa4ccxf7 = document['querySelector']('.totalMore-oneFive-profit');
   const _0xa4ccxf8 = document['querySelector']('.totalMore-oneFive_mod');
   _0xa4ccxf8['textContent'] = _0xa4ccxf5['toFixed'](2) + ' %';
   const _0xa4ccxf9 = document['querySelector']('.totalMore-oneFive-profit_mod');
   const _0xa4ccxfa = 1.15 / (_0xa4ccxf5 / 100);
   _0xa4ccxf7['textContent'] = _0xa4ccxfa['toFixed'](2);
   _0xa4ccxf9['textContent'] = _0xa4ccxfa['toFixed'](2);
   const _0xa4ccxfb = 100 - _0xa4ccxf5;
   const _0xa4ccxfc = document['querySelector']('.totalLess-oneFive');
   _0xa4ccxfc['textContent'] = _0xa4ccxfb['toFixed'](2) + ' %';
   const _0xa4ccxfd = document['querySelector']('.totalLess-oneFive-profit');
   const _0xa4ccxfe = document['querySelector']('.totalLess-oneFive_mod');
   _0xa4ccxfe['textContent'] = _0xa4ccxfb['toFixed'](2) + ' %';
   const _0xa4ccxff = document['querySelector']('.totalLess-oneFive-profit_mod');
   const _0xa4ccx100 = 1.15 / (_0xa4ccxfb / 100);
   _0xa4ccxfd['textContent'] = _0xa4ccx100['toFixed'](2);
   _0xa4ccxff['textContent'] = _0xa4ccx100['toFixed'](2);
   const _0xa4ccx101 = _0xa4ccx28 + _0xa4ccx2a + _0xa4ccx2d + _0xa4ccx31 + _0xa4ccx36 + _0xa4ccx3c + _0xa4ccx51 + _0xa4ccx52 + _0xa4ccx53 + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx44 + _0xa4ccx57 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx2b + _0xa4ccx2e + _0xa4ccx32 + _0xa4ccx37 + _0xa4ccx3d + _0xa4ccx45 + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx2f + _0xa4ccx33 + _0xa4ccx38 + _0xa4ccx3e + _0xa4ccx46 + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx34 + _0xa4ccx39 + _0xa4ccx3f + _0xa4ccx47 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx3a + _0xa4ccx40 + _0xa4ccx48 + _0xa4ccx65 + _0xa4ccx41 + _0xa4ccx49 + _0xa4ccx29 + _0xa4ccx2c + _0xa4ccx30 + _0xa4ccx35 + _0xa4ccx3b + _0xa4ccx4c + _0xa4ccx4d + _0xa4ccx4e + _0xa4ccx4f + _0xa4ccx50;
   const _0xa4ccx102 = document['querySelector']('.totalMore-two');
   const _0xa4ccx103 = document['querySelector']('.totalMore-two-profit');
   const _0xa4ccx104 = 1.15 / (_0xa4ccx101 / 100);
   const _0xa4ccx105 = 100 - _0xa4ccx101;
   const _0xa4ccx106 = document['querySelector']('.totalLess-two');
   const _0xa4ccx107 = document['querySelector']('.totalLess-two-profit');
   const _0xa4ccx108 = 1.15 / (_0xa4ccx105 / 100);
   const _0xa4ccx109 = _0xa4ccx28 + _0xa4ccx2a + _0xa4ccx2d + _0xa4ccx31 + _0xa4ccx36 + _0xa4ccx3c + _0xa4ccx51 + _0xa4ccx52 + _0xa4ccx53 + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx44 + _0xa4ccx57 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx2b + _0xa4ccx2e + _0xa4ccx32 + _0xa4ccx37 + _0xa4ccx3d + _0xa4ccx45 + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx2f + _0xa4ccx33 + _0xa4ccx38 + _0xa4ccx3e + _0xa4ccx46 + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx34 + _0xa4ccx39 + _0xa4ccx3f + _0xa4ccx47 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx3a + _0xa4ccx40 + _0xa4ccx48 + _0xa4ccx65 + _0xa4ccx41 + _0xa4ccx49 + _0xa4ccx29 + _0xa4ccx2c + _0xa4ccx30 + _0xa4ccx35 + _0xa4ccx3b + _0xa4ccx4c + _0xa4ccx4d + _0xa4ccx4e + _0xa4ccx4f + _0xa4ccx50;
   const _0xa4ccx10a = document['querySelector']('.totalMore-twoFive');
   _0xa4ccx10a['textContent'] = _0xa4ccx109['toFixed'](2) + ' %';
   const _0xa4ccx10b = document['querySelector']('.totalMore-twoFive-profit');
   const _0xa4ccx10c = document['querySelector']('.totalMore-twoFive_mod');
   _0xa4ccx10c['textContent'] = _0xa4ccx109['toFixed'](2) + ' %';
   const _0xa4ccx10d = document['querySelector']('.totalMore-twoFive-profit_mod');
   const _0xa4ccx10e = 1.15 / (_0xa4ccx109 / 100);
   _0xa4ccx10b['textContent'] = _0xa4ccx10e['toFixed'](2);
   _0xa4ccx10d['textContent'] = _0xa4ccx10e['toFixed'](2);
   const _0xa4ccx10f = 100 - _0xa4ccx109;
   const _0xa4ccx110 = document['querySelector']('.totalLess-twoFive');
   _0xa4ccx110['textContent'] = _0xa4ccx10f['toFixed'](2) + ' %';
   const _0xa4ccx111 = document['querySelector']('.totalLess-twoFive-profit');
   const _0xa4ccx112 = document['querySelector']('.totalLess-twoFive_mod');
   _0xa4ccx112['textContent'] = _0xa4ccx10f['toFixed'](2) + ' %';
   const _0xa4ccx113 = document['querySelector']('.totalLess-twoFive-profit_mod');
   const _0xa4ccx114 = 1.15 / (_0xa4ccx10f / 100);
   _0xa4ccx111['textContent'] = _0xa4ccx114['toFixed'](2);
   _0xa4ccx113['textContent'] = _0xa4ccx114['toFixed'](2);
   const _0xa4ccx115 = _0xa4ccx2a + _0xa4ccx2d + _0xa4ccx31 + _0xa4ccx36 + _0xa4ccx3c + _0xa4ccx52 + _0xa4ccx53 + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx44 + _0xa4ccx57 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx2b + _0xa4ccx2e + _0xa4ccx32 + _0xa4ccx37 + _0xa4ccx3d + _0xa4ccx45 + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx2f + _0xa4ccx33 + _0xa4ccx38 + _0xa4ccx3e + _0xa4ccx46 + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx34 + _0xa4ccx39 + _0xa4ccx3f + _0xa4ccx47 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx3a + _0xa4ccx40 + _0xa4ccx48 + _0xa4ccx65 + _0xa4ccx41 + _0xa4ccx49 + _0xa4ccx2c + _0xa4ccx30 + _0xa4ccx35 + _0xa4ccx3b + _0xa4ccx4d + _0xa4ccx4e + _0xa4ccx4f + _0xa4ccx50;
   const _0xa4ccx116 = document['querySelector']('.totalMore-three');
   const _0xa4ccx117 = document['querySelector']('.totalMore-three-profit');
   const _0xa4ccx118 = 1.15 / (_0xa4ccx115 / 100);
   const _0xa4ccx119 = 100 - _0xa4ccx115;
   const _0xa4ccx11a = document['querySelector']('.totalLess-three');
   const _0xa4ccx11b = document['querySelector']('.totalLess-three-profit');
   const _0xa4ccx11c = 1.15 / (_0xa4ccx119 / 100);
   const _0xa4ccx11d = _0xa4ccx2a + _0xa4ccx2d + _0xa4ccx31 + _0xa4ccx36 + _0xa4ccx3c + _0xa4ccx52 + _0xa4ccx53 + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx44 + _0xa4ccx57 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx2b + _0xa4ccx2e + _0xa4ccx32 + _0xa4ccx37 + _0xa4ccx3d + _0xa4ccx45 + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx2f + _0xa4ccx33 + _0xa4ccx38 + _0xa4ccx3e + _0xa4ccx46 + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx34 + _0xa4ccx39 + _0xa4ccx3f + _0xa4ccx47 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx3a + _0xa4ccx40 + _0xa4ccx48 + _0xa4ccx65 + _0xa4ccx41 + _0xa4ccx49 + _0xa4ccx2c + _0xa4ccx30 + _0xa4ccx35 + _0xa4ccx3b + _0xa4ccx4d + _0xa4ccx4e + _0xa4ccx4f + _0xa4ccx50;
   const _0xa4ccx11e = document['querySelector']('.totalMore-threeFive');
   _0xa4ccx11e['textContent'] = _0xa4ccx11d['toFixed'](2) + ' %';
   const _0xa4ccx11f = document['querySelector']('.totalMore-threeFive-profit');
   const _0xa4ccx120 = document['querySelector']('.totalMore-threeFive_mod');
   _0xa4ccx120['textContent'] = _0xa4ccx11d['toFixed'](2) + ' %';
   const _0xa4ccx121 = document['querySelector']('.totalMore-threeFive-profit_mod');
   const _0xa4ccx122 = 1.15 / (_0xa4ccx11d / 100);
   _0xa4ccx11f['textContent'] = _0xa4ccx122['toFixed'](2);
   _0xa4ccx121['textContent'] = _0xa4ccx122['toFixed'](2);
   const _0xa4ccx123 = 100 - _0xa4ccx11d;
   const _0xa4ccx124 = document['querySelector']('.totalLess-threeFive');
   _0xa4ccx124['textContent'] = _0xa4ccx123['toFixed'](2) + ' %';
   const _0xa4ccx125 = document['querySelector']('.totalLess-threeFive-profit');
   const _0xa4ccx126 = document['querySelector']('.totalLess-threeFive_mod');
   _0xa4ccx126['textContent'] = _0xa4ccx123['toFixed'](2) + ' %';
   const _0xa4ccx127 = document['querySelector']('.totalLess-threeFive-profit_mod');
   const _0xa4ccx128 = 1.15 / (_0xa4ccx123 / 100);
   _0xa4ccx125['textContent'] = _0xa4ccx128['toFixed'](2);
   _0xa4ccx127['textContent'] = _0xa4ccx128['toFixed'](2);
   const _0xa4ccx129 = _0xa4ccx2d + _0xa4ccx31 + _0xa4ccx36 + _0xa4ccx3c + _0xa4ccx53 + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx57 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx2b + _0xa4ccx2e + _0xa4ccx32 + _0xa4ccx37 + _0xa4ccx3d + _0xa4ccx45 + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx2f + _0xa4ccx33 + _0xa4ccx38 + _0xa4ccx3e + _0xa4ccx46 + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx34 + _0xa4ccx39 + _0xa4ccx3f + _0xa4ccx47 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx3a + _0xa4ccx40 + _0xa4ccx48 + _0xa4ccx65 + _0xa4ccx41 + _0xa4ccx49 + _0xa4ccx2c + _0xa4ccx30 + _0xa4ccx35 + _0xa4ccx3b + _0xa4ccx4e + _0xa4ccx4f + _0xa4ccx50;
   const _0xa4ccx12a = document['querySelector']('.totalMore-four');
   const _0xa4ccx12b = document['querySelector']('.totalMOre-four-profit');
   const _0xa4ccx12c = 1.15 / (_0xa4ccx129 / 100);
   const _0xa4ccx12d = 100 - _0xa4ccx129;
   const _0xa4ccx12e = document['querySelector']('.totalLess-four');
   const _0xa4ccx12f = document['querySelector']('.totalLess-four-profit');
   const _0xa4ccx130 = 1.15 / (_0xa4ccx12d / 100);
   const _0xa4ccx131 = _0xa4ccx2d + _0xa4ccx31 + _0xa4ccx36 + _0xa4ccx3c + _0xa4ccx53 + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx57 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx2b + _0xa4ccx2e + _0xa4ccx32 + _0xa4ccx37 + _0xa4ccx3d + _0xa4ccx45 + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx2f + _0xa4ccx33 + _0xa4ccx38 + _0xa4ccx3e + _0xa4ccx46 + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx34 + _0xa4ccx39 + _0xa4ccx3f + _0xa4ccx47 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx3a + _0xa4ccx40 + _0xa4ccx48 + _0xa4ccx65 + _0xa4ccx41 + _0xa4ccx49 + _0xa4ccx30 + _0xa4ccx35 + _0xa4ccx3b + _0xa4ccx4e + _0xa4ccx4f + _0xa4ccx50;
   const _0xa4ccx132 = document['querySelector']('.totalMore-fourFive');
   _0xa4ccx132['textContent'] = _0xa4ccx131['toFixed'](2) + ' %';
   const _0xa4ccx133 = document['querySelector']('.totalMore-fourFive-profit');
   const _0xa4ccx134 = document['querySelector']('.totalMore-fourFive_mod');
   _0xa4ccx134['textContent'] = _0xa4ccx131['toFixed'](2) + ' %';
   const _0xa4ccx135 = document['querySelector']('.totalMore-fourFive-profit_mod');
   const _0xa4ccx136 = 1.15 / (_0xa4ccx131 / 100);
   _0xa4ccx133['textContent'] = _0xa4ccx136['toFixed'](2);
   _0xa4ccx135['textContent'] = _0xa4ccx136['toFixed'](2);
   const _0xa4ccx137 = 100 - _0xa4ccx131;
   const _0xa4ccx138 = document['querySelector']('.totalLess-fourFive');
   _0xa4ccx138['textContent'] = _0xa4ccx137['toFixed'](2) + ' %';
   const _0xa4ccx139 = document['querySelector']('.totalLess-fourFive-profit');
   const _0xa4ccx13a = document['querySelector']('.totalLess-fourFive_mod');
   _0xa4ccx13a['textContent'] = _0xa4ccx137['toFixed'](2) + ' %';
   const _0xa4ccx13b = document['querySelector']('.totalLess-fourFive-profit_mod');
   const _0xa4ccx13c = 1.15 / (_0xa4ccx137 / 100);
   _0xa4ccx139['textContent'] = _0xa4ccx13c['toFixed'](2);
   _0xa4ccx13b['textContent'] = _0xa4ccx13c['toFixed'](2);
   const _0xa4ccx13d = _0xa4ccx31 + _0xa4ccx36 + _0xa4ccx3c + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx2e + _0xa4ccx32 + _0xa4ccx37 + _0xa4ccx3d + _0xa4ccx45 + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx2f + _0xa4ccx33 + _0xa4ccx38 + _0xa4ccx3e + _0xa4ccx46 + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx34 + _0xa4ccx39 + _0xa4ccx3f + _0xa4ccx47 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx3a + _0xa4ccx40 + _0xa4ccx48 + _0xa4ccx65 + _0xa4ccx41 + _0xa4ccx49 + _0xa4ccx35 + _0xa4ccx3b + _0xa4ccx4f + _0xa4ccx50;
   const _0xa4ccx13e = document['querySelector']('.totalMore-five');
   const _0xa4ccx13f = document['querySelector']('.totalMore-five-profit');
   const _0xa4ccx140 = 1.15 / (_0xa4ccx13d / 100);
   const _0xa4ccx141 = 100 - _0xa4ccx13d;
   const _0xa4ccx142 = document['querySelector']('.totalLess-five');
   const _0xa4ccx143 = document['querySelector']('.totalLess-five-profit');
   const _0xa4ccx144 = 1.15 / (_0xa4ccx141 / 100);
   const _0xa4ccx145 = _0xa4ccx43 + _0xa4ccx51 + _0xa4ccx52 + _0xa4ccx53 + _0xa4ccx54 + _0xa4ccx55 + _0xa4ccx56 + _0xa4ccx28 + _0xa4ccx2a + _0xa4ccx2d + _0xa4ccx31 + _0xa4ccx36 + _0xa4ccx3c + _0xa4ccx44 + _0xa4ccx57 + _0xa4ccx58 + _0xa4ccx59 + _0xa4ccx5a + _0xa4ccx5b + _0xa4ccx2b + _0xa4ccx2e + _0xa4ccx32 + _0xa4ccx37 + _0xa4ccx3d + _0xa4ccx45 + _0xa4ccx5c + _0xa4ccx5d + _0xa4ccx5e + _0xa4ccx5f + _0xa4ccx2f + _0xa4ccx33 + _0xa4ccx38 + _0xa4ccx3e + _0xa4ccx46 + _0xa4ccx60 + _0xa4ccx61 + _0xa4ccx62 + _0xa4ccx34 + _0xa4ccx39 + _0xa4ccx3f + _0xa4ccx47 + _0xa4ccx63 + _0xa4ccx64 + _0xa4ccx3a + _0xa4ccx40 + _0xa4ccx48 + _0xa4ccx65 + _0xa4ccx41 + _0xa4ccx49;
   const _0xa4ccx146 = document['querySelector']('.allScored');
   _0xa4ccx146['textContent'] = _0xa4ccx145['toFixed'](2) + ' %';
   const _0xa4ccx147 = document['querySelector']('.allScored-profit');
   const _0xa4ccx148 = document['querySelector']('.allScored_mod');
   _0xa4ccx148['textContent'] = _0xa4ccx145['toFixed'](2) + ' %';
   const _0xa4ccx149 = document['querySelector']('.allScored-profit_mod');
   const _0xa4ccx14a = 1.15 / (_0xa4ccx145 / 100);
   _0xa4ccx147['textContent'] = _0xa4ccx14a['toFixed'](2);
   _0xa4ccx149['textContent'] = _0xa4ccx14a['toFixed'](2);
   const _0xa4ccx14b = 100 - _0xa4ccx145;
   const _0xa4ccx14c = document['querySelector']('.notAllScored');
   _0xa4ccx14c['textContent'] = _0xa4ccx14b['toFixed'](2) + ' %';
   const _0xa4ccx14d = document['querySelector']('.notAllScored-profit');
   const _0xa4ccx14e = document['querySelector']('.notAllScored_mod');
   _0xa4ccx14e['textContent'] = _0xa4ccx14b['toFixed'](2) + ' %';
   const _0xa4ccx14f = document['querySelector']('.notAllScored-profit_mod');
   const _0xa4ccx150 = 1.15 / (_0xa4ccx14b / 100);
   _0xa4ccx14d['textContent'] = _0xa4ccx150['toFixed'](2);
   _0xa4ccx14f['textContent'] = _0xa4ccx150['toFixed'](2)
}

function Fixed(_0xa4ccx152, _0xa4ccx153, _0xa4ccx154) {
   var _0xa4ccx155 = 1;
   if (_0xa4ccx154 > 0) {
       _0xa4ccx155 /= Math['pow'](10, _0xa4ccx154);
       if (_0xa4ccx152 < -_0xa4ccx155) {
           _0xa4ccx152 -= 0.5 * _0xa4ccx155
       } else {
           if (_0xa4ccx152 > _0xa4ccx155) {
               _0xa4ccx152 += 0.5 * _0xa4ccx155
           } else {
               _0xa4ccx152 = 0
           }
       }
   };
   _0xa4ccx152 = '' + _0xa4ccx152;
   var _0xa4ccx156 = 0;
   if (_0xa4ccx152['charAt'](0) == '-') {
       _0xa4ccx156 = 2;
       _0xa4ccx152 = _0xa4ccx152['substring'](1, _0xa4ccx152['length'])
   };
   var _0xa4ccx157 = '';
   var _0xa4ccx5 = _0xa4ccx152['lastIndexOf']('E');
   if (_0xa4ccx5 < 0) {
       _0xa4ccx5 = _0xa4ccx152['lastIndexOf']('e')
   };
   if (_0xa4ccx5 > -1) {
       _0xa4ccx157 = _0xa4ccx152['substring'](_0xa4ccx5, _0xa4ccx152['length']);
       _0xa4ccx152 = _0xa4ccx152['substring'](0, _0xa4ccx5)
   };
   var _0xa4ccx158 = _0xa4ccx152['indexOf']('.', 0);
   if (_0xa4ccx158 == -1) {
       _0xa4ccx158 = _0xa4ccx152['length'];
       if (_0xa4ccx154 > 0) {
           _0xa4ccx152 += '.';
           _0xa4ccx158 = _0xa4ccx152['length'] - 1
       }
   };
   if (_0xa4ccx158 == 0) {
       _0xa4ccx152 = '0' + _0xa4ccx152;
       _0xa4ccx158 = 1
   };
   while ((_0xa4ccx154 > 0) && ((_0xa4ccx152['length'] - _0xa4ccx158 - 1) < _0xa4ccx154)) {
       _0xa4ccx152 += '0'
   };
   var _0xa4ccx159 = _0xa4ccx152['length'] - _0xa4ccx158 - 1;
   if (_0xa4ccx159 > _0xa4ccx154) {
       if (_0xa4ccx154 == 0) {
           _0xa4ccx152 = _0xa4ccx152['substring'](0, _0xa4ccx158)
       } else {
           _0xa4ccx152 = _0xa4ccx152['substring'](0, _0xa4ccx158 + _0xa4ccx154 + 1)
       }
   };
   _0xa4ccx152 += _0xa4ccx157;
   if (_0xa4ccx156 > 0) {
       _0xa4ccx152 = '-' + _0xa4ccx152
   };
   while (_0xa4ccx152['length'] < _0xa4ccx153) {
       _0xa4ccx152 = ' ' + _0xa4ccx152
   };
   return _0xa4ccx152
}

function DoPoi(_0xa4ccx15b) {
   var _0xa4ccxf = PosV(parseFloat(_0xa4ccx15b['u']['value']));
   _0xa4ccx15b['u']['value'] = Fixed(_0xa4ccxf, 10, 4);
   var _0xa4ccxc = PosV(parseInt(_0xa4ccx15b['k']['value']));
   _0xa4ccx15b['k']['value'] = Fixed(_0xa4ccxc, 8, 0);
   _0xa4ccx15b['tnk']['value'] = Fixed(PoissonTerm(_0xa4ccxf, _0xa4ccxc), 8, 4);
   var _0xa4ccx15c = PoissonP(_0xa4ccxf, _0xa4ccxc);
   _0xa4ccx15b['puk']['value'] = Fixed(_0xa4ccx15c, 8, 4);
   _0xa4ccx15b['quk']['value'] = Fixed(1 - _0xa4ccx15c, 8, 4)
}

function PoissonTerm(_0xa4ccxf, _0xa4ccxc) {
   return Math['exp']((_0xa4ccxc * Math['log'](_0xa4ccxf)) - _0xa4ccxf - LnFact(_0xa4ccxc))
}

function LnFact(_0xa4ccx15f) {
   if (_0xa4ccx15f <= 1) {
       _0xa4ccx15f = 1
   };
   if (_0xa4ccx15f < 12) {
       return Math['log'](Fact(Math['round'](_0xa4ccx15f)))
   } else {
       var _0xa4ccx160 = 1 / _0xa4ccx15f;
       var _0xa4ccx161 = _0xa4ccx160 * _0xa4ccx160;
       var _0xa4ccx162 = _0xa4ccx161 * _0xa4ccx160;
       var _0xa4ccx163 = _0xa4ccx162 * _0xa4ccx161;
       var _0xa4ccx164 = _0xa4ccx163 * _0xa4ccx161;
       var _0xa4ccx165 = ((_0xa4ccx15f + 0.5) * Math['log'](_0xa4ccx15f)) - _0xa4ccx15f;
       _0xa4ccx165 += Math['log'](2 * Math['PI']) / 2;
       _0xa4ccx165 += (_0xa4ccx160 / 12) - (_0xa4ccx162 / 360);
       _0xa4ccx165 += (_0xa4ccx163 / 1260) - (_0xa4ccx164 / 1680);
       return _0xa4ccx165
   }
}

function Fact(_0xa4ccx15f) {
   var _0xa4ccx15c = 1;
   while (_0xa4ccx15f > 1) {
       _0xa4ccx15c *= _0xa4ccx15f--
   };
   return _0xa4ccx15c
}

function PosV(_0xa4ccx15f) {
   if (_0xa4ccx15f < 0) {
       _0xa4ccx15f = -_0xa4ccx15f
   };
   return _0xa4ccx15f
}
resultMathButton['addEventListener']('click', () => {
   areaRectangle();
   PoissonDistrib()
})