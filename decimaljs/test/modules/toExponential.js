define(function(localRequire, exports, module) { var requireOrig = require; require = localRequire;
if (typeof T === 'undefined') require('decimaljs/test/setup');

T('toExponential', function () {

  function t(expected, n, dp) {
    T.assertEqual(expected, new Decimal(n).toExponential(dp));
  }

  function tx(fn, msg) {
    T.assertException(fn, msg);
  }

  Decimal.config({
    precision: 20,
    rounding: 4,
    toExpNeg: -9e15,
    toExpPos: 9e15,
    minE: -9e15,
    maxE: 9e15
  });

  t('1e+0', 1);
  t('1.1e+1', 11);
  t('1.12e+2', 112);

  t('1e+0', 1, 0);
  t('1e+1', 11, 0);
  t('1e+2', 112, 0);
  t('1.0e+0', 1, 1);
  t('1.1e+1', 11, 1);
  t('1.1e+2', 112, 1);
  t('1.00e+0', 1, 2);
  t('1.10e+1', 11, 2);
  t('1.12e+2', 112, 2);
  t('1.000e+0', 1, 3);
  t('1.100e+1', 11, 3);
  t('1.120e+2', 112, 3);
  t('1e-1', 0.1);
  t('1.1e-1', 0.11);
  t('1.12e-1', 0.112);
  t('1e-1', 0.1, 0);
  t('1e-1', 0.11, 0);
  t('1e-1', 0.112, 0);
  t('1.0e-1', 0.1, 1);
  t('1.1e-1', 0.11, 1);
  t('1.1e-1', 0.112, 1);
  t('1.00e-1', 0.1, 2);
  t('1.10e-1', 0.11, 2);
  t('1.12e-1', 0.112, 2);
  t('1.000e-1', 0.1, 3);
  t('1.100e-1', 0.11, 3);
  t('1.120e-1', 0.112, 3);

  t('-1e+0', -1);
  t('-1.1e+1', -11);
  t('-1.12e+2', -112);
  t('-1e+0', -1, 0);
  t('-1e+1', -11, 0);
  t('-1e+2', -112, 0);
  t('-1.0e+0', -1, 1);
  t('-1.1e+1', -11, 1);
  t('-1.1e+2', -112, 1);
  t('-1.00e+0', -1, 2);
  t('-1.10e+1', -11, 2);
  t('-1.12e+2', -112, 2);
  t('-1.000e+0', -1, 3);
  t('-1.100e+1', -11, 3);
  t('-1.120e+2', -112, 3);
  t('-1e-1', -0.1);
  t('-1.1e-1', -0.11);
  t('-1.12e-1', -0.112);
  t('-1e-1', -0.1, 0);
  t('-1e-1', -0.11, 0);
  t('-1e-1', -0.112, 0);
  t('-1.0e-1', -0.1, 1);
  t('-1.1e-1', -0.11, 1);
  t('-1.1e-1', -0.112, 1);
  t('-1.00e-1', -0.1, 2);
  t('-1.10e-1', -0.11, 2);
  t('-1.12e-1', -0.112, 2);
  t('-1.000e-1', -0.1, 3);
  t('-1.100e-1', -0.11, 3);
  t('-1.120e-1', -0.112, 3);

  t('NaN', NaN);
  t('NaN', -NaN, 2);
  t('Infinity', Infinity);
  t('Infinity', Infinity, 10);
  t('-Infinity', -Infinity, 0);
  t('-Infinity', -Infinity, 1);
  t('0e+0', 0);
  t('0e+0', -0);
  t('-5.0e-1', -0.5, 1);
  t('0.00e+0', 0, 2);
  t('1e+1', 11.2356, 0);
  t('1.1236e+1', 11.2356, 4);
  t('1.1236e-4', 0.000112356, 4);
  t('-1.1236e-4', -0.000112356, 4);
  t('1.12356e-4', 0.000112356);
  t('-1.12356e-4', -0.000112356);

  t('1.00e+0', 0.99976, 2);
  t('1.00e+2', 99.9979, 2);
  t('1.00e+5', '99991.27839', 2);
  t('1.000e+2', '99.999', 3);
  t('1.000e+7', '9999512.8', 3);
  t('1.00e+9', '999702726', 2);
  t('1.000e+3', '999.964717', 3);

  Decimal.rounding = 0;

  t('1e-8', '0.00000001');
  t('1.00000000001e+3', '1000.00000001');
  t('-5.3453435435e+8', '-53453.435435E4');
  t('-8.8254658100092746334967191957167916942544e+17', '-882546581000927463.34967191957167916942543286', 40);
  t('-4.794121828559674450610889008537305783490457e-9', '-0.00000000479412182855967445061088900853730578349045628396662493370334888944406719979291547717079', 42);
  t('3.6149e+33', '3614844933096444884855774574994631.0106397808', 4);
  t('5.582954000000000e-12', '0.000000000005582954', 15);
  t('-3.88740271991885914774802363151163005925700000000000000000e-24', '-0.000000000000000000000003887402719918859147748023631511630059257', 56);
  t('-6.87079645872437277236913190316306435274902613151676421e-20', '-0.00000000000000000006870796458724372772369131903163064352749026131516764202733298056929060151437', 53);
  t('3.8181874087278104533737313621586530711155405443818235503358935045749888900678e+35', '381818740872781045337373136215865307.11155405443818235503358935045749888900677769535371296063', 76);
  t('-7.11375441247784115059912118586189732891550e+20', '-711375441247784115059.91211858618973289154952986', 41);
  t('6.5783e+24', '6578282366667302135641813.7249573246362582', 4);
  t('6.000000000000000000000e-20', '0.00000000000000000006', 21);
  t('-5.3799672107777e+13', '-53799672107777', 13);
  t('-6.949e-23', '-0.00000000000000000000006948849870723', 3);
  t('-8.073585184316705309757817e+25', '-80735851843167053097578169.623098209399637950843019109979317', 24);
  t('-4.2956483e-12', '-0.0000000000042956482047751', 7);
  t('-6.1162155721951440801240154580459651167830311633e+15', '-6116215572195144.0801240154580459651167830311633', 46);
  t('-7.263265230767e-21', '-0.000000000000000000007263265230766073544739', 12);
  t('-2.3013406115701776345891815e+18', '-2301340611570177634.5891814408272260224632', 25);
  t('-6.0299793663e+30', '-6029979366232747481609455093247.705001183386474', 10);
  t('-2.97544304967e+21', '-2975443049668038511693.75547178021412', 11);
  t('-4.1471192639160032e+10', '-41471192639.1600315953295208128538183546', 16);
  t('-3.61201776785294987e+27', '-3612017767852949869824542721.1595027189', 17);
  t('-6.9983494044506115115e+17', '-699834940445061151.14676', 19);
  t('-1.4580700323629245038287e+20', '-145807003236292450382.86958174', 22);
  t('-8.54e+10', '-85390930743', 2);
  t('-2.715269856970717e+19', '-27152698569707163435', 15);
  t('-5.67681004e+20', '-567681003999187989540.627303416332508226276308449233', 8);
  t('-2.06809e+27', '-2068085084336615438842661921.06985539576218546524301', 5);
  t('-2.92273061370427012250925e+14', '-292273061370427.0122509240087955481845060858420928631', 23);
  t('-4.3355e-17', '-0.0000000000000000433542', 4);
  t('-3.491610942584e+21', '-3491610942583064798345', 12);
  t('-8.701944635985129980360621e+16', '-87019446359851299.8036062002728328', 24);
  t('-4.9e-10', '-0.000000000486409475991', 1);
  t('-4.82125e+19', '-48212433366063403866', 5);
  t('-7.95593941e-20', '-0.000000000000000000079559394098236', 8);
  t('-2.00563e-10', '-0.0000000002005622924388', 5);
  t('-6.9777057921142634382521825e+16', '-69777057921142634.3825218243275152606161149381', 25);
  t('-8.42591e+14', '-842590769172062', 5);
  t('-6.35123264409e+27', '-6351232644080754054285724566', 11);
  t('-5.508835492577586495894259979e-28', '-0.00000000000000000000000000055088354925775864958942599785412', 27);
  t('-2.667451876e+12', '-2667451875964', 9);
  t('-6.6444610474323616283e+26', '-664446104743236162820999716', 19);
  t('-2.419775049243e+12', '-2419775049242.726', 12);
  t('-5.32e-18', '-0.000000000000000005319', 2);
  t('-8.63030355223e-26', '-0.000000000000000000000000086303035522286938593814060049934', 11);
  t('-2.5046920981956385048538613818080285657602718e+17', '-250469209819563850.48538613818080285657602717018', 43);

  Decimal.rounding = 1;

  t('0e+0', '-0.0E-0');
  t('-2.856376815219143184897347685012382222462687620998915470135915e+6', '-2856376.815219143184897347685012382222462687620998915470135915511363444', 60);
  t('7.75700e-24', '0.000000000000000000000007757', 5);
  t('7.0e-1', '0.7', 1);
  t('5.2109749078977455423107465583658126e+37', '52109749078977455423107465583658126637', 34);
  t('3.631093819552528994444977110063007461579154042777868294000e-29', '0.00000000000000000000000000003631093819552528994444977110063007461579154042777868294', 57);
  t('-9.893937860425888e+8', '-989393786.042588804219191', 15);
  t('8.7978043622607467e+42', '8797804362260746751563912625017414439944006.5804807', 16);
  t('-4.6561702764394602621e-7', '-0.000000465617027643946026213823955447791862428108248596086901464075785390015', 19);
  t('-2.542770482242902215596924884302407e+8', '-254277048.224290221559692488430240765024783', 33);
  t('2.70000000e-8', '0.000000027', 8);
  t('-8.0291821891769794408790934252924453237e+16', '-80291821891769794.408790934252924453237503615825249362166', 37);
  t('-8.05295923004057358545854771e-16', '-0.0000000000000008052959230040573585458547716514262', 26);
  t('-2.786758e-21', '-0.00000000000000000000278675879025858093817787290334306', 6);
  t('-8.0160835624737225803853824687641777660406527e+20', '-801608356247372258038.538246876417776604065270622886204812876', 43);
  t('-7.2849054887999144694619191770897589e+27', '-7284905488799914469461919177.08975892527524', 34);
  t('-7.586e-17', '-0.00000000000000007586908', 3);
  t('-5.9508150933636580674249602941673984254864e+20', '-595081509336365806742.496029416739842548642249', 40);
  t('-3.526911897e-18', '-0.000000000000000003526911897770082481187', 9);
  t('-5.774e-22', '-0.0000000000000000000005774729035676859', 3);
  t('-6.4700957007714124190210074e-13', '-0.00000000000064700957007714124190210074383', 25);
  t('-5.610492e+21', '-5610492566512449795573', 6);
  t('-6.015e+23', '-601556443593022914280678', 3);
  t('-6.0673361553344e+11', '-606733615533.448288878', 13);
  t('-3.1e+26', '-315617199368461055533962323.071668327669249', 1);
  t('-9.1391079512104562032343e+24', '-9139107951210456203234346', 22);
  t('-2.0441e+21', '-2044198307917443182711', 4);
  t('-8.21283723216249535240085606500821783973097233e+23', '-821283723216249535240085.606500821783973097233814324', 44);
  t('-6.375e+14', '-637540984314799.4', 3);
  t('-2.17797482005219478530856429744726e+29', '-217797482005219478530856429744.7268928676963181', 32);
  t('-3.9547e+11', '-395476721391', 4);
  t('-6.8927e+21', '-6892798573971046301111', 4);
  t('-6.33842141402916538926e-12', '-0.000000000006338421414029165389261335065112712777', 20);
  t('-4.5727e-30', '-0.000000000000000000000000000004572725511159166', 4);
  t('-7.8847457779026882221249217577974e-17', '-0.000000000000000078847457779026882221249217577974', 31);
  t('-2.64916231640264927e+12', '-2649162316402.649271824', 17);
  t('-1.73604404e+28', '-17360440496948254515028685124.37795415803082546457797184294', 8);
  t('-8.680224985623e+16', '-86802249856236148.11694273469092873', 12);
  t('-4.3e-19', '-0.00000000000000000043859841576346037715462713764211635', 1);
  t('-7.68867535389098159141717105e-11', '-0.000000000076886753538909815914171710501337139', 26);
  t('-5.24325038611090505928389422325001606e+21', '-5243250386110905059283.894223250016067979080420266', 35);
  t('-1.38e-21', '-0.0000000000000000000013874592057586367688528204069850262406', 2);
  t('-7.308601949094508589445770582074109410615037e+24', '-7308601949094508589445770.5820741094106150373221910779', 42);
  t('-3.2638e+13', '-32638405387645.3309565877781780222317335852159983', 4);
  t('-3.55454737448094719019291183206515059962378e+22', '-35545473744809471901929.118320651505996237856336054914', 41);
  t('-5.3906242252792e-11', '-0.00000000005390624225279268530907215395611', 13);
  t('-8.86760873811213105078e+15', '-8867608738112131.050787', 20);
  t('-4.78129254835567e-23', '-0.00000000000000000000004781292548355671480462711435866243551', 14);
  t('-6.4694208834502691835879021438795583630205e-19', '-0.00000000000000000064694208834502691835879021438795583630205', 40);

  Decimal.rounding = 2;

  t('0e+0', '0E0000000000');
  t('0e+0', '-0E01');
  t('0.00e+0', '-0E00000000001', 2);
  t('3.0465655253692145345165166442116e-14', '0.0000000000000304656552536921453451651664421156', 31);
  t('9.0573943842008592406279608542923313381394286641978907203396551e+22', '90573943842008592406279.60854292331338139428664197890720339655043720040907662489784', 61);
  t('-1.17181502970008783734855040984899000e-1', '-0.117181502970008783734855040984899', 35);
  t('-5.28860565e-16', '-0.00000000000000052886056528317233012115396784629214632', 8);
  t('6.4114675970838738000e-18', '0.0000000000000000064114675970838738', 19);
  t('8.00000000000000000000e-20', '0.00000000000000000008', 20);
  t('2.74000064578288771723078597711103520450391668117802304078152085625023633681179e+24', '2740000645782887717230785.977111035204503916681178023040781520856250236336811781347278', 77);
  t('8.1936742669491704846805837777816457628e-16', '0.00000000000000081936742669491704846805837777816457628', 37);
  t('-7.2157448e+14', '-721574484716710.00141299844961546', 7);
  t('-5.321807464703650000000e-15', '-0.00000000000000532180746470365', 21);
  t('-4.449e+27', '-4449471658582621135143349142.228707647170080816912435271162', 3);
  t('-4.922915821313919623758e+19', '-49229158213139196237.584', 21);
  t('-6.996668225774098e-14', '-0.000000000000069966682257740984029052', 15);
  t('-8.6856039174822133942616012424795168e+11', '-868560391748.2213394261601242479516861829472792', 34);
  t('-8.461e+21', '-8461810373307862460504', 3);
  t('-3.898716627703194625824411967e+25', '-38987166277031946258244119.67718', 27);
  t('-2.821935496755e+26', '-282193549675582402670759843.23655', 12);
  t('-3.49e-22', '-0.0000000000000000000003491662482987', 2);
  t('-3.362111778576231615366457333e-14', '-0.0000000000000336211177857623161536645733316587527475522615', 27);
  t('-5.9933e-13', '-0.00000000000059933412636903331', 4);
  t('-2.77927721e+29', '-277927721100404435781172100113.4136636412460458083951', 8);
  t('-1.876833722329e-10', '-0.0000000001876833722329987477942', 12);
  t('-6.5e+14', '-653341175209856', 1);
  t('-8.627291840173867961e+14', '-862729184017386.7961', 18);
  t('-3.9137457165597668391301218029e-11', '-0.00000000003913745716559766839130121802935022889', 28);
  t('-8.95e+10', '-89532775488', 2);
  t('-2.1395541875015568986238e-17', '-0.000000000000000021395541875015568986238771696', 22);
  t('-4.98575853353890809143399546448630559732119628e-12', '-0.00000000000498575853353890809143399546448630559732119628509', 44);
  t('-8.99e+16', '-89989591559494822', 2);
  t('-3.49346327e+22', '-34934632714180035424463', 8);
  t('-3.5699537605753905457597e-14', '-0.00000000000003569953760575390545759785014980652333323889116', 22);
  t('-2.9892536880349975618286e+12', '-2989253688034.9975618286212199904979534461637613', 22);
  t('-3.04383919217904949618e+10', '-30438391921.790494961888803732171', 20);
  t('-8.232411544e+17', '-823241154405701456', 9);
  t('-5.809151226990464016815e-16', '-0.00000000000000058091512269904640168152354', 21);
  t('-8.522042397326932431e+13', '-85220423973269.324312660179132118', 18);
  t('-7.5210942e-22', '-0.000000000000000000000752109428925015', 7);
  t('-5.2018321449543e+23', '-520183214495439298725191.09', 13);
  t('-6.04084045453711395629268198016245611021901815e+21', '-6040840454537113956292.68198016245611021901815486929628647', 44);
  t('-1.495478178996755138125934544343674798e-13', '-0.00000000000014954781789967551381259345443436747983317353423', 36);
  t('-6.881484497510733524151245220630282259985306546537e+16', '-68814844975107335.241512452206302822599853065465371507616758', 48);
  t('-4.7121389019956e-14', '-0.00000000000004712138901995619', 13);

  Decimal.rounding = 3;

  t('-9.99999999000000009e+8', '-999999999.000000009e-0');
  t('-3.99764422903251220452704763278376060858663250289320247532595e+24', '-3997644229032512204527047.63278376060858663250289320247532594416986984981431156065660613', 59);
  t('5.534083545686157907280686578717428772e+12', '5534083545686.157907280686578717428772', 36);
  t('5.00000000e-9', '0.000000005', 8);
  t('-4.08363116583051e+14', '-408363116583051', 14);
  t('9.278230415634296945273818e+19', '92782304156342969452.738186255580532649103987374718221928871873054827841260470670536425', 24);
  t('-1.08732508998603085454662e-12', '-0.000000000001087325089986030854546619968259691229662152159029641023997866843605032534351388775075', 23);
  t('3.5288804517377606688698e+32', '352888045173776066886981811418233.218955856086', 22);
  t('4.32188781438877554e+16', '43218878143887755.42593887518334667202', 17);
  t('-8.15e+2', '-815', 2);
  t('1.515077312590223222678749527e+18', '1515077312590223222.678749527895871363186918977679783240817218232896076765321818445939718165', 27);
  t('-8.0538186421664536509917032729912932814374102e+20', '-805381864216645365099.17032729912932814374101821', 43);
  t('-3.4367097301002099047381e+14', '-343670973010020.990473804391071456587732173', 22);
  t('-5.3421e-12', '-0.0000000000053420288504', 4);
  t('-2.6320052e+23', '-263200517731973006983184.60341959097016190770542276', 7);
  t('-4.5e-11', '-0.000000000044673422483', 1);
  t('-7.232463101115829118145025733451801e-17', '-0.00000000000000007232463101115829118145025733451800457178', 33);
  t('-1.18320100044154762448545914170978206041022039e+22', '-11832010004415476244854.5914170978206041022038489', 44);
  t('-7.745237371276392645711e+21', '-7745237371276392645710.0521930569226728841707200771', 21);
  t('-4.431559500053255695643e-10', '-0.000000000443155950005325569564213010993378905', 21);
  t('-2.5e-24', '-0.000000000000000000000002443', 1);
  t('-5.005027028439023958391203127005503621542e-11', '-0.0000000000500502702843902395839120312700550362154137', 39);
  t('-6.453525377934213334367e-22', '-0.00000000000000000000064535253779342133343665123283565', 21);
  t('-4.5594370326121718626850982373529e+13', '-45594370326121.71862685098237352845979966987', 31);
  t('-1.709e+16', '-17088248121660259', 3);
  t('-3.9047581533864713e+16', '-39047581533864712.6574405', 16);
  t('-2.08804202e-17', '-0.000000000000000020880420127397564274443250271135', 8);
  t('-6.801694635944774655689008216925036e+15', '-6801694635944774.65568900821692503508025', 33);
  t('-8.7691286374104240967931800593734e+19', '-87691286374104240967.93180059373367907299683816381677816389', 31);
  t('-2.802257731715238453e-29', '-0.000000000000000000000000000028022577317152384526775320012', 18);
  t('-4.4705e+22', '-44704405768781565005877.813010169083', 4);
  t('-4.17374908496486449232e-10', '-0.00000000041737490849648644923105632500267064', 20);
  t('-2.2707e-10', '-0.00000000022706134122862417334386435', 4);
  t('-2.85432e-24', '-0.0000000000000000000000028543100839983854161', 5);
  t('-5.79188949e+12', '-5791889489461.643555240257', 8);
  t('-7.46e+15', '-7459701910718662.03421293892346992893463534702', 2);
  t('-1.0535086280629e+25', '-10535086280628995915087428.2423609320023833125322801559606', 13);
  t('-2.9074412651647188367106e+30', '-2907441265164718836710598468491.31550321772', 22);
  t('-5.010945976711327691649e+27', '-5010945976711327691648509517.2305', 21);
  t('-8.8633960213386533e-20', '-0.0000000000000000000886339602133865324283362544', 16);
  t('-3.1891844834898211661452730714015664837805e+19', '-31891844834898211661.45273071401566483780434051217', 40);
  t('-5.083380976014365533843229882526437e+28', '-50833809760143655338432298825.264367948359', 33);
  t('-6.8e-16', '-0.000000000000000678534987604148025611184', 1);
  t('-7.9e+30', '-7838656097386639584904346062976.9346038436', 1);
  t('-6.30535781e+20', '-630535780834495012856', 8);
  t('-9.663e-30', '-0.00000000000000000000000000000966289400023904753107633012', 3);
  t('-2.315198482309e+12', '-2315198482308.7361348', 12);
  t('-8.158235289416e+18', '-8158235289415958939', 12);
  t('-4.1618890517404316933699206360639988582832624525e+23', '-416188905174043169336992.063606399885828326245241437', 46);
  t('-5.97550716981833990839441709632e+21', '-5975507169818339908394.41709631281058258352209', 29);
  t('-6.3372e-18', '-0.000000000000000006337122571683959413228', 4);
  t('-8.9189088e+18', '-8918908714500548003.38400978696756078013348', 7);

  Decimal.rounding = 4;

  t('-5.002239116605888927178702930656e-39', '-0.00000000000000000000000000000000000000500223911660588892717870293065633642', 30);
  t('-8.52292947230244775435e+29', '-852292947230244775434968241532.494643593912804433318745222587246680109833509655450267792446', 20);
  t('-6.1169514510867e+10', '-61169514510.8673382', 13);
  t('-8.05745763527307676170759722175169266017831695215e+48', '-8057457635273076761707597221751692660178316952146', 47);
  t('-4.923572102098e+10', '-49235721020.9847017846898652687600227388412980598816', 12);
  t('-7.981341661715027117746906076515945e+41', '-798134166171502711774690607651594491039629', 33);
  t('-8.00e-3', '-0.008', 2);
  t('8.517466793430899278197016892000000000000e-15', '0.000000000000008517466793430899278197016892', 39);
  t('-3.032293512e+0', '-3.0322935124071923328711934463341802038', 9);
  t('-2.60682904403489305678908771323995810138267385200000000e-20', '-0.00000000000000000002606829044034893056789087713239958101382673852', 53);
  t('-3.935816927273980e+20', '-393581692727398036652.850960055902271', 15);
  t('-8.5902152501051e+29', '-859021525010507210136559039003.689834129033952321238', 13);
  t('-7.24491e-30', '-0.00000000000000000000000000000724490826045045451271534', 5);
  t('-8.4948070285349193974989221504919380656715136165603325e+24', '-8494807028534919397498922.15049193806567151361656033246', 52);
  t('-6.3295239596e-17', '-0.00000000000000006329523959626011114164', 10);
  t('-3.1725692353e+30', '-3172569235260846783669130724638.711', 10);
  t('-4.065727077e+11', '-406572707673.336570352310681187663765', 9);
  t('-6.82883869249998075574247223155497e+18', '-6828838692499980755.7424722315549682855987375899188309581152', 32);
  t('-2.56144400427045214943786338e+24', '-2561444004270452149437863.38354535663028539', 26);
  t('-4.97637439956044400125498868e+23', '-497637439956044400125498.8682100590602459937304614141772', 26);
  t('-4.307891929198702822746534506143e+29', '-430789192919870282274653450614.349564081', 30);
  t('-8.55e-27', '-0.00000000000000000000000000855367295711812079', 2);
  t('-7.906e+11', '-790612526329.410459220189562', 3);
  t('-3.1841363e-22', '-0.00000000000000000000031841363', 7);
  t('-6.2068049304845006e+20', '-620680493048450055389.3227069760888437941041', 16);
  t('-8.4809476e+18', '-8480947614295114807.320148688', 7);
  t('-2.287988570734255855e+23', '-228798857073425585542366.399034916953775', 18);
  t('-8.148647139762925073276164486240320698e+21', '-8148647139762925073276.1644862403206980851079', 36);
  t('-6.87643138785664756e-12', '-0.0000000000068764313878566475604352570287089535238582267443', 17);
  t('-3.709587e+18', '-3709586618852569033.55141868', 6);
  t('-6.8086794224e+28', '-68086794224433270564431694468.814537646575833889824621540849', 10);
  t('-4.966301085179e+19', '-49663010851788946007', 12);
  t('-5.34439184068052811184219234494114e+26', '-534439184068052811184219234.494113670484623394', 32);
  t('-2.798732412e+16', '-27987324119455299', 9);
  t('-1.554430791885961957e+15', '-1554430791885961.956863404519493346081223', 18);
  t('-6.90619083822075003978e+24', '-6906190838220750039778836.289105048686876596', 20);
  t('-1.108034176809770578315e+12', '-1108034176809.7705783154', 21);
  t('-1.43e+22', '-14266566332440117777110.63461224926682073525873105', 2);
  t('-9.15e+13', '-91477543307040.916791223', 2);
  t('-1.1001e+26', '-110010856476508992391958436.9355559264588205214557001854', 4);
  t('-1.2e+16', '-12148027447349021', 1);
  t('-4.4e+13', '-44268551660889.40880208546489742632181832780494', 1);
  t('-8.62058920338555484081691e+19', '-86205892033855548408.169086865949596390775', 23);
  t('-5.2e-13', '-0.00000000000051876025261394172', 1);
  t('-4.88063953404884862027221562057786242658496407473e-11', '-0.0000000000488063953404884862027221562057786242658496407473', 47);
  t('-5.255e+18', '-5254530327311322805.9528217', 3);
  t('-6.4630488003995117e-11', '-0.0000000000646304880039951167486', 16);
  t('-8.638990742871e-16', '-0.0000000000000008638990742870608', 12);
  t('-1.57817750020560815944470062e+12', '-1578177500205.60815944470062002898187', 26);
  t('-3.6558384593093900422637e-27', '-0.00000000000000000000000000365583845930939004226367940618', 22);

  Decimal.rounding = 5;

  t('4.95474614815842e+38', '495474614815842191683004449862568813538.573064401156', 14);
  t('-8.9667567079038139e+16', '-89667567079038139', 16);
  t('-7.0e+2', '-703', 1);
  t('-2.6249e+33', '-2624861185343559570287214983819906', 4);
  t('-6.510119186347371697501169416839709631422185436811698613000000000000000000000000000000e-31', '-0.0000000000000000000000000000006510119186347371697501169416839709631422185436811698613', 84);
  t('7.73e+3', '7729', 2);
  t('1.4393781011009257793117531801549e+4', '14393.781011009257793117531801548751', 31);
  t('8.4e+6', '8404542', 1);
  t('8.471284625267663009248667391059202502589207637435209861233007389000000000000000e-35', '0.00000000000000000000000000000000008471284625267663009248667391059202502589207637435209861233007389', 78);
  t('-5.26079297227015e+31', '-52607929722701509263909039511536.9266822991', 14);
  t('-4.63550600857003551411914120562163394e+15', '-4635506008570035.51411914120562163394396594237358863897062', 35);
  t('-7.8219563406482338767189100434751303552919130625101491e+27', '-7821956340648233876718910043.4751303552919130625101491', 52);
  t('-6.977184098e+17', '-697718409782854734', 9);
  t('-8.1e+15', '-8092701222454628.9934935902179330839653799891168', 1);
  t('-3.872944373744596915691884729973e+15', '-3872944373744596.91569188472997336351132980366520033057011287', 30);
  t('-1.389676e+11', '-138967565295.146055555208419143848718279114979831585', 6);
  t('-2.218316993130903882223e+19', '-22183169931309038822.22612', 21);
  t('-3.370809304e-25', '-0.000000000000000000000000337080930401566', 9);
  t('-6.1503e+19', '-61503417721509415792.24703', 4);
  t('-3.13657134e-22', '-0.00000000000000000000031365713378439345', 8);
  t('-1.9e-10', '-0.000000000187981', 1);
  t('-2.596508353714425677970049724e+28', '-25965083537144256779700497237.5841327343962292316215149169', 27);
  t('-4.151454545748277604112308101174917062e+11', '-415145454574.827760411230810117491706171981266892178', 36);
  t('-1.3e-18', '-0.000000000000000001319061308619561567664259803361817', 1);
  t('-1.5294854487046553159e+24', '-1529485448704655315921667', 19);
  t('-1.9365487654708143765583400538310103350799e-13', '-0.000000000000193654876547081437655834005383101033507988', 40);
  t('-3.88128259276357427027515474e+25', '-38812825927635742702751547.353', 26);
  t('-5.64525474904155517374289736218e-11', '-0.00000000005645254749041555173742897362182099811344', 29);
  t('-8.94963385755006409131430087734467745e+22', '-89496338575500640913143.0087734467744538', 35);
  t('-3.7551731901764025e+17', '-375517319017640249', 16);
  t('-7.601921e-16', '-0.00000000000000076019214974360137746140339586742455753', 6);
  t('-6.93501087055e+20', '-693501087055377288564', 11);
  t('-1.283656440009563e+24', '-1283656440009563292695670.575360580373829197017512', 15);
  t('-4.9556506e+13', '-49556505932168.7211084603', 7);
  t('-8.133584588946e+26', '-813358458894586332533196788.490201803951456991010654609646', 12);
  t('-3.824207296e+22', '-38242072955850210158724', 9);
  t('-4.2168087e-12', '-0.00000000000421680868317080291', 7);
  t('-7.152812829e+15', '-7152812829336253.782723153403637377960530795', 9);
  t('-8.0469635248612874571e+16', '-80469635248612874.5712104436', 19);
  t('-2.726549954018643349550392804e+11', '-272654995401.8643349550392803783934819148125595437353472547', 27);
  t('-2.477986360297097033217143e+30', '-2477986360297097033217143442370.539404', 24);
  t('-2.7620555408e+15', '-2762055540757162', 10);
  t('-5.044e+10', '-50436788962', 3);
  t('-1.51176171306898543927009427965761639e+17', '-151176171306898543.9270094279657616389483779413616294465635', 35);
  t('-1.77876313221062362e+17', '-177876313221062362.01', 17);
  t('-4.28033364715744300662536e+13', '-42803336471574.430066253616', 23);
  t('-6.053e-13', '-0.00000000000060527568964627046163209582', 3);
  t('-3.9447068214322315685949701607748761e+16', '-39447068214322315.685949701607748760885392781169754754427622', 34);
  t('-4.76203665586552028e+15', '-4762036655865520.285', 17);
  t('-7.442141482296791204320219247230530359e+24', '-7442141482296791204320219.2472305303585223494415', 36);

  Decimal.rounding = 6;

  t('-4.3502707501164e+36', '-4350270750116411997402439304498892819', 13);
  t('9.5e-21', '0.0000000000000000000094520280724178734152', 1);
  t('1.39631186750554172785676012693418617250072200744214625994656047727270672248243741907e+34', '13963118675055417278567601269341861.725007220074421462599465604772727067224824374190703237660781', 83);
  t('5.9446570e-26', '0.00000000000000000000000005944657036540768164877637239177740419063920648', 7);
  t('7.00000e-12', '0.000000000007', 5);
  t('-2.87e+14', '-287060740776209.3950381715', 2);
  t('3.411740542875509329e+24', '3411740542875509328514044', 18);
  t('-6.20235112738687046118395830000000000000000000000e-29', '-0.000000000000000000000000000062023511273868704611839583', 47);
  t('2.94349130121570276626863135396717336528655493e+19', '29434913012157027662.686313539671733652865549279174', 44);
  t('4.01255076512828067130306533670644537832e-10', '0.000000000401255076512828067130306533670644537831678294548', 38);
  t('-5.4277306444432e+11', '-542773064444.317654960431120452254700391693837992', 13);
  t('-4.355706886680889557797360814402e+30', '-4355706886680889557797360814401.536556745674646509159280626', 30);
  t('-1.29e-15', '-0.00000000000000128978312277001609181774216296380783932', 2);
  t('-1.0588973816292989769e+25', '-10588973816292989768709129.1767038708798755780352204', 19);
  t('-3.210569596e+10', '-32105695962.8803639621', 9);
  t('-7.18504270173744681360682714959e+28', '-71850427017374468136068271495.87', 29);
  t('-4.615682142828269066227773895179987062919e+20', '-461568214282826906622.7773895179987062919071922', 39);
  t('-1.3864477517287155526073e+13', '-13864477517287.15552607265', 22);
  t('-6.793120028e+13', '-67931200280922.72252141789646787475433427482', 9);
  t('-8.075e-18', '-0.000000000000000008074975073002274636799975', 3);
  t('-8.360228691054180854419062530687032074820667001e+24', '-8360228691054180854419062.530687032074820667001120752628', 45);
  t('-3.0763956760417194035216e-12', '-0.000000000003076395676041719403521594', 22);
  t('-2.5288383e+25', '-25288383009460922631988717.84659997837058450749', 7);
  t('-4.554185192e+29', '-455418519247311560996997520087.98189', 9);
  t('-9.135175372324138467397264e+11', '-913517537232.413846739726417', 24);
  t('-8.257259383044471855222900534859251889332388855848e-10', '-0.0000000008257259383044471855222900534859251889332388855848', 48);
  t('-7.651597268450922707e-13', '-0.000000000000765159726845092270720405167100094', 18);
  t('-8.952011763950994514e+26', '-895201176395099451377549961.34870447', 18);
  t('-2.7395479569618982298152060567357e-10', '-0.00000000027395479569618982298152060567357', 31);
  t('-1.31151451700453378841431e+24', '-1311514517004533788414313', 23);
  t('-5.915297930316863891e-10', '-0.0000000005915297930316863890707686339684395', 18);
  t('-1.449e-27', '-0.0000000000000000000000000014487033279693402845128265141859', 3);
  t('-3.7e+10', '-36919550406.826974442743517918128', 1);
  t('-3.945347688940382499631779106638865e+13', '-39453476889403.824996317791066388653', 33);
  t('-8.547704e-29', '-0.0000000000000000000000000000854770378842608635356', 6);
  t('-3.76e+25', '-37618296325402619735777629.467812385256281737441412', 2);
  t('-8.031066086398624e+28', '-80310660863986235667567286452', 15);
  t('-4.038276256088135496e-17', '-0.000000000000000040382762560881354955896694823328777602811', 18);
  t('-1.77173574740860868e+25', '-17717357474086086837250852', 17);
  t('-1.421967649e+21', '-1421967648805122645888', 9);
  t('-4.7e+11', '-469485715327', 1);
  t('-7.372223291560455075681748682810527006883e+16', '-73722232915604550.75681748682810527006882666313809409', 39);
  t('-8.9539396357e+14', '-895393963565598', 10);
  t('-8.14646103854802172250414801405e+10', '-81464610385.48021722504148014045579178726', 29);
  t('-1.2053415734425581e+12', '-1205341573442.5581371841633131879', 16);
  t('-8.35214176861046133596101313170854966756043001e+28', '-83521417686104613359610131317.0854966756043001041619492', 44);

  Decimal.rounding = 4;

  t('-2.033619450856645241153977e+0', '-2.03361945085664524115397653636144859', 24);
  t('1.130e+8', '112955590.0430616', 3);
  t('-2.1366468193419876852426155614364269e+10', '-21366468193.419876852426155614364269', 34);
  t('5.82086615659566151529e+7', '58208661.56595661515285734890860077163', 20);
  t('9.1615809372817426111208e+6', '9161580.937281742611120838868847823478250167882379624', 22);
  t('3.8976506901061164197e+1', '38.97650690106116419699490320634490920742414', 19);
  t('9.0994914931570087194607344641722310104e+6', '9099491.4931570087194607344641722310103895224905', 37);
  t('6.06e+5', '605633', 2);
  t('2.6999974790473705518992117e+1', '26.9999747904737055189921170044987', 25);
  t('6.7108801361722e+6', '6710880.136172156342982663450743452', 13);
  t('-8.0e+0', '-8', 1);
  t('3.000e-2', '0.03', 3);
  t('-4.7e+2', '-469', 1);
  t('-6.3000e+0', '-6.3', 4);
  t('-5.4e+2', '-542', 1);
  t('-5.2000e+0', '-5.2', 4);
  t('-9.00000e-2', '-0.09', 5);
  t('-3.1000e-1', '-0.31', 4);
  t('-4.4e+2', '-436', 1);
  t('-3.00e+0', '-3', 2);
  t('-5.00e-2', '-0.05', 2);
  t('1.00e-2', '0.01', 2);

  t('1.23e+2', '123');
  t('1e+2', '123', 0);
  t('1e+2', '123', -0);

  tx(function () {new Decimal('1.23').toExponential('3')}, "('1.23').toExponential('3')");
  tx(function () {new Decimal('1.23').toExponential(new Decimal('3'))}, "('1.23').toExponential(new Decimal('3'))");
  tx(function () {new Decimal('1.23').toExponential(null)}, "('1.23').toExponential(null)");
  tx(function () {new Decimal('1.23').toExponential(NaN)}, "('1.23').toExponential(NaN)");
  tx(function () {new Decimal('1.23').toExponential('NaN')}, "('1.23').toExponential('NaN')");
  tx(function () {new Decimal('1.23').toExponential([])}, "('1.23').toExponential([])");
  tx(function () {new Decimal('1.23').toExponential({})}, "('1.23').toExponential({})");
  tx(function () {new Decimal('1.23').toExponential('')}, "('1.23').toExponential('')");
  tx(function () {new Decimal('1.23').toExponential(' ')}, "('1.23').toExponential(' ')");
  tx(function () {new Decimal('1.23').toExponential('hello')}, "('1.23').toExponential('hello')");
  tx(function () {new Decimal('1.23').toExponential('\t')}, "('1.23').toExponential('\t')");
  tx(function () {new Decimal('1.23').toExponential(new Date)}, "('1.23').toExponential(new Date)");
  tx(function () {new Decimal('1.23').toExponential(new RegExp)}, "('1.23').toExponential(new RegExp)");
  tx(function () {new Decimal('1.23').toExponential(2.01)}, "('1.23').toExponential(2.01)");
  tx(function () {new Decimal('1.23').toExponential(10.5)}, "('1.23').toExponential(10.5)");
  tx(function () {new Decimal('1.23').toExponential('1.1e1')}, "('1.23').toExponential('1.1e1')");
  tx(function () {new Decimal('1.23').toExponential(true)}, "('1.23').toExponential(true)");
  tx(function () {new Decimal('1.23').toExponential(false)}, "('1.23').toExponential(false)");
  tx(function () {new Decimal('1.23').toExponential(function (){})}, "('1.23').toExponential(function (){})");

  tx(function () {new Decimal(1.23).toExponential('-1')}, ".toExponential('-1')");
  tx(function () {new Decimal(1.23).toExponential(-23)}, ".toExponential(-23)");
  tx(function () {new Decimal(1.23).toExponential(1e9 + 1)}, ".toExponential(1e9 + 1)");
  tx(function () {new Decimal(1.23).toExponential(-0.01)}, ".toExponential(-0.01)");
  tx(function () {new Decimal(1.23).toExponential('-1e-1')}, ".toExponential('-1e-1')");
  tx(function () {new Decimal(1.23).toExponential(Infinity)}, ".toExponential(Infinity)");
  tx(function () {new Decimal(1.23).toExponential('-Infinity')}, ".toExponential('-Infinity')");

  tx(function () {new Decimal('1.23').toExponential(1, '3')}, "('1.23').toExponential(1, '3')");
  tx(function () {new Decimal('1.23').toExponential(1, new Decimal('3'))}, "('1.23').toExponential(1, new Decimal('3'))");
  tx(function () {new Decimal('1.23').toExponential(1, null)}, "('1.23').toExponential(1, null)");
  tx(function () {new Decimal('1.23').toExponential(1, NaN)}, "('1.23').toExponential(1, NaN)");
  tx(function () {new Decimal('1.23').toExponential(1, 'NaN')}, "('1.23').toExponential(1, 'NaN')");
  tx(function () {new Decimal('1.23').toExponential(1, [])}, "('1.23').toExponential(1, [])");
  tx(function () {new Decimal('1.23').toExponential(1, {})}, "('1.23').toExponential(1, {})");
  tx(function () {new Decimal('1.23').toExponential(1, '')}, "('1.23').toExponential(1, '')");
  tx(function () {new Decimal('1.23').toExponential(1, ' ')}, "('1.23').toExponential(1, ' ')");
  tx(function () {new Decimal('1.23').toExponential(1, 'hello')}, "('1.23').toExponential(1, 'hello')");
  tx(function () {new Decimal('1.23').toExponential(1, '\t')}, "('1.23').toExponential(1, '\t')");
  tx(function () {new Decimal('1.23').toExponential(1, new Date)}, "('1.23').toExponential(1, new Date)");
  tx(function () {new Decimal('1.23').toExponential(1, new RegExp)}, "('1.23').toExponential(1, new RegExp)");
  tx(function () {new Decimal('1.23').toExponential(1, 2.01)}, "('1.23').toExponential(1, 2.01)");
  tx(function () {new Decimal('1.23').toExponential(1, 10.5)}, "('1.23').toExponential(1, 10.5)");
  tx(function () {new Decimal('1.23').toExponential(1, '1.1e1')}, "('1.23').toExponential(1, '1.1e1')");
  tx(function () {new Decimal('1.23').toExponential(1, true)}, "('1.23').toExponential(1, true)");
  tx(function () {new Decimal('1.23').toExponential(1, false)}, "('1.23').toExponential(1, false)");
  tx(function () {new Decimal('1.23').toExponential(1, function (){})}, "('1.23').toExponential(1, function (){})");

  tx(function () {new Decimal(1.23).toExponential(1, '-1')}, ".toExponential(1, '-1')");
  tx(function () {new Decimal(1.23).toExponential(1, -23)}, ".toExponential(1, -23)");
  tx(function () {new Decimal(1.23).toExponential(1, 1e9 + 1)}, ".toExponential(1, 1e9 + 1)");
  tx(function () {new Decimal(1.23).toExponential(1, -0.01)}, ".toExponential(1, -0.01)");
  tx(function () {new Decimal(1.23).toExponential(1, '-1e-1')}, ".toExponential(1, '-1e-1')");
  tx(function () {new Decimal(1.23).toExponential(1, Infinity)}, ".toExponential(1, Infinity)");
  tx(function () {new Decimal(1.23).toExponential(1, '-Infinity')}, ".toExponential(1, '-Infinity')");
});

require = requireOrig;});
