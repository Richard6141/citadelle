import { Link } from "react-router-dom";
import { ArrowLeft, Building2, FileText, Users, Shield, CreditCard, ShoppingCart, DollarSign, Send, Clock, RotateCcw, Ban, Lock, Scale, AlertTriangle, Headphones, Database, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const CGV = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conditions G&eacute;n&eacute;rales de Vente
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conditions r&eacute;gissant la vente des licences d'acc&egrave;s aux services Citadelle.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">

            {/* Introduction */}
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <p className="text-muted-foreground">
                Les pr&eacute;sentes conditions g&eacute;n&eacute;rales de vente (ci-apr&egrave;s les &laquo; CGV &raquo;) r&eacute;gissent la vente,
                par Citadelle Ltd (ci-apr&egrave;s &laquo; Citadelle &raquo;), de licences d'acc&egrave;s &agrave; un espace r&eacute;serv&eacute; et
                &agrave; des contenus d'analyses sportives et de signaux &agrave; caract&egrave;re informatif et &eacute;ducatif,
                accessibles via Telegram (ci-apr&egrave;s le &laquo; Site &raquo;).
              </p>
            </div>

            {/* 1. Identit&eacute; du vendeur */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  1. Identit&eacute; du vendeur
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>Le site est &eacute;dit&eacute; et exploit&eacute; par :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Citadelle Ltd</strong></li>
                  <li>Soci&eacute;t&eacute; &agrave; responsabilit&eacute; limit&eacute;e de droit maltais</li>
                  <li>Immatricul&eacute;e aupr&egrave;s du Malta Business Registry sous le num&eacute;ro XXXXX</li>
                  <li>Si&egrave;ge social : XXXXX</li>
                </ul>
              </div>
            </div>

            {/* 2. Champ d'application */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  2. Champ d'application
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Les pr&eacute;sentes CGV s'appliquent &agrave; toute commande pass&eacute;e sur le site. Elles pr&eacute;valent sur
                  toute autre version ou document, sauf accord &eacute;crit expr&egrave;s de Citadelle.
                </p>
                <p>
                  La validation d'une commande implique l'acceptation pleine et enti&egrave;re des pr&eacute;sentes CGV
                  ainsi que des <Link to="/cgu" className="text-primary hover:underline">conditions g&eacute;n&eacute;rales d'utilisation (CGU)</Link> du site.
                  Cette acceptation est mat&eacute;rialis&eacute;e par une action positive du client (case &agrave; cocher et/ou validation de commande).
                </p>
              </div>
            </div>

            {/* 3. D&eacute;finitions */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  3. D&eacute;finitions
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <ul className="space-y-4">
                  <li><strong className="text-foreground">Licence :</strong> Droit d'acc&egrave;s personnel, non transf&eacute;rable et limit&eacute; dans le temps aux contenus num&eacute;riques propos&eacute;s par Citadelle.</li>
                  <li><strong className="text-foreground">Contenus :</strong> Ensemble des contenus num&eacute;riques diffus&eacute;s par Citadelle &agrave; caract&egrave;re informatif et &eacute;ducatif, notamment des analyses sportives, probabilit&eacute;s, sc&eacute;narios et signaux indicatifs.</li>
                  <li><strong className="text-foreground">Canal :</strong> Canal priv&eacute; exploit&eacute; par Citadelle, utilis&eacute; comme moyen technique de d&eacute;livrance des contenus pendant la dur&eacute;e de la licence.</li>
                  <li><strong className="text-foreground">Plateforme tierce :</strong> Tout service tiers non exploit&eacute; par Citadelle, dont les conditions et r&egrave;gles d'utilisation s'appliquent au client.</li>
                </ul>
              </div>
            </div>

            {/* 4. Nature du service */}
            <div className="p-8 bg-card rounded-xl border border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  4. Nature du service - Absence d'activit&eacute; de jeu ou de pari
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Le service vendu consiste exclusivement en la mise &agrave; disposition de contenus num&eacute;riques
                  &agrave; caract&egrave;re informatif relatifs &agrave; des &eacute;v&eacute;nements sportifs.
                </p>
                <p>
                  <strong className="text-foreground">Citadelle n'est ni op&eacute;rateur de jeux, ni interm&eacute;diaire de paris.</strong>
                  Citadelle n'organise aucun jeu d'argent, n'accepte aucune mise, ne place aucun pari,
                  ne g&egrave;re aucun compte de jeu et ne per&ccedil;oit aucun gain li&eacute; &agrave; des paris.
                </p>
                <p>
                  Le client demeure seul responsable de l'utilisation qu'il fait des contenus et des d&eacute;cisions qu'il prend.
                </p>
              </div>
            </div>

            {/* 5. Conditions d'&eacute;ligibilit&eacute; */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  5. Conditions d'&eacute;ligibilit&eacute;
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le client d&eacute;clare &ecirc;tre majeur selon la l&eacute;gislation applicable dans son pays de r&eacute;sidence
                  et avoir la capacit&eacute; juridique de contracter.
                </p>
                <p>
                  Le site est accessible &agrave; l'international. Le client reconna&icirc;t acc&eacute;der au service de sa propre
                  initiative et s'engage &agrave; v&eacute;rifier, pr&eacute;alablement &agrave; tout achat et toute utilisation, que l'acc&egrave;s
                  aux contenus et leur usage sont autoris&eacute;s par la r&eacute;glementation qui lui est applicable.
                </p>
              </div>
            </div>

            {/* 6. Offres */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <CreditCard className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  6. Offres - Caract&eacute;ristiques des licences
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Les licences propos&eacute;es (notamment leur prix, devise, dur&eacute;e, p&eacute;rim&egrave;tre d'acc&egrave;s) sont d&eacute;crites
                  sur la page de commande au moment de l'achat. Les informations affich&eacute;es au moment de la commande font foi.
                </p>
                <p>
                  La licence conf&egrave;re au client un droit d'acc&egrave;s aux contenus pendant la dur&eacute;e achet&eacute;e.
                  &Agrave; l'issue de cette dur&eacute;e, l'acc&egrave;s est automatiquement retir&eacute; et la licence prend fin.
                </p>
                <p>
                  Sauf mention expresse contraire au moment de la commande, les licences ne sont pas reconduites automatiquement.
                </p>
              </div>
            </div>

            {/* 7. Commande */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <ShoppingCart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  7. Commande
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  La commande s'effectue en ligne. Le client v&eacute;rifie avant validation le choix de la licence,
                  son prix, sa dur&eacute;e, ainsi que toute information pr&eacute;contractuelle affich&eacute;e.
                </p>
                <p>
                  La commande devient d&eacute;finitive apr&egrave;s (i) validation de la commande, (ii) acceptation des CGV et CGU,
                  et (iii) paiement effectif.
                </p>
                <p>
                  Le d&eacute;lai d'acc&egrave;s aux services peut &ecirc;tre de 48h.
                </p>
                <p>
                  Citadelle se r&eacute;serve le droit de refuser, suspendre ou annuler une commande en cas de suspicion
                  de fraude, d'usage abusif, d'impay&eacute;, de non-respect des CGU/CGV ou de risque de s&eacute;curit&eacute;.
                </p>
              </div>
            </div>

            {/* 8. Prix */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <DollarSign className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  8. Prix, devise, frais
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Les prix sont indiqu&eacute;s en USD selon l'affichage au moment de la commande.
                  Tout frais suppl&eacute;mentaire, notamment des frais de conversion, de rejet de paiement
                  ou de taxe suppl&eacute;mentaire demeure &agrave; la charge du client.
                </p>
                <p>
                  Citadelle peut modifier ses tarifs &agrave; tout moment. Le prix applicable est celui affich&eacute; au moment de la commande.
                </p>
              </div>
            </div>

            {/* 9. Paiement */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <CreditCard className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  9. Paiement
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le paiement est exigible imm&eacute;diatement &agrave; la commande. Les moyens de paiement accept&eacute;s sont
                  ceux affich&eacute;s sur le site. Les paiements peuvent &ecirc;tre trait&eacute;s par un prestataire tiers ;
                  dans ce cas, le client accepte les conditions du prestataire au moment du paiement.
                </p>
                <p>
                  En cas de rejet, d'incident ou d'impay&eacute;, l'acc&egrave;s peut &ecirc;tre suspendu ou r&eacute;sili&eacute; de plein droit.
                </p>
              </div>
            </div>

            {/* 10. D&eacute;livrance */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Send className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  10. D&eacute;livrance du service
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le client reconna&icirc;t et accepte que la d&eacute;livrance des contenus est r&eacute;alis&eacute;e principalement
                  via un canal Telegram priv&eacute;. L'acc&egrave;s &agrave; ce canal n&eacute;cessite un compte Telegram actif et le respect
                  des r&egrave;gles et conditions d'utilisation de Telegram.
                </p>
                <p>
                  Apr&egrave;s paiement, Citadelle fournit au client les instructions d'acc&egrave;s au canal, au moyen des
                  coordonn&eacute;es fournies par le client.
                </p>
                <p>
                  Sauf disposition imp&eacute;rative contraire, la dur&eacute;e de la licence commence &agrave; courir &agrave; compter de
                  l'envoi par Citadelle des instructions d'acc&egrave;s au canal Telegram.
                </p>
                <p>
                  &Agrave; l'expiration de la dur&eacute;e achet&eacute;e, le client reconna&icirc;t que son acc&egrave;s au canal est automatiquement
                  retir&eacute;, sans formalit&eacute;.
                </p>
              </div>
            </div>

            {/* 11. Mesures alternatives */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  11. Mesures alternatives
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le client reconna&icirc;t que Telegram est une plateforme tierce dont Citadelle n'est ni propri&eacute;taire
                  ni exploitant. Citadelle ne garantit pas la disponibilit&eacute; ininterrompue de Telegram ni l'absence
                  d'incidents imputables &agrave; Telegram.
                </p>
                <p>
                  En cas d'incident imputable &agrave; Telegram affectant l'acc&egrave;s, Citadelle pourra, lorsqu'elle le juge
                  raisonnablement possible, proposer un moyen alternatif de d&eacute;livrance des contenus.
                </p>
              </div>
            </div>

            {/* 12. Droit de r&eacute;tractation */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <RotateCcw className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  12. Droit de r&eacute;tractation
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Lorsque le client a la qualit&eacute; de consommateur au sens du droit de l'Union europ&eacute;enne,
                  il dispose en principe d'un droit de r&eacute;tractation de 14 jours.
                </p>
                <p>
                  Toutefois, lorsque la licence donne acc&egrave;s &agrave; des contenus num&eacute;riques non fournis sur un support
                  mat&eacute;riel et que le client demande l'ex&eacute;cution imm&eacute;diate (activation imm&eacute;diate de l'acc&egrave;s au canal
                  et aux contenus), le client reconna&icirc;t expressement que l'ex&eacute;cution commence imm&eacute;diatement
                  et qu'il perd son droit de r&eacute;tractation d&egrave;s l'activation.
                </p>
              </div>
            </div>

            {/* 13. Politique de remboursement */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Ban className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  13. Politique de remboursement
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Sous r&eacute;serve des dispositions l&eacute;gales applicables, aucun remboursement n'est d&ucirc; au client apr&egrave;s
                  activation de la licence, notamment en cas de changement d'avis, de non-utilisation du service,
                  de mauvaise interpr&eacute;tation des contenus, ou de pertes financi&egrave;res li&eacute;es aux d&eacute;cisions du client.
                </p>
                <p>
                  Par exception, lorsque la loi l'exige, un remboursement, une r&eacute;duction du prix, une extension
                  de dur&eacute;e ou un autre rem&egrave;de l&eacute;gal pourra s'appliquer notamment en cas de non-fourniture du service
                  imputable &agrave; Citadelle.
                </p>
              </div>
            </div>

            {/* 14. Obligations du client */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Lock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  14. Obligations du client
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le client est seul responsable de la cr&eacute;ation, du maintien et de l'usage de son compte Telegram
                  ainsi que du respect des conditions d'utilisation de Telegram.
                </p>
                <p>
                  L'acc&egrave;s au canal est strictement personnel, non cessible, non transf&eacute;rable, et rattach&eacute; au compte
                  du client. Le client s'interdit toute cession, partage, pr&ecirc;t, duplication, contournement des
                  restrictions d'acc&egrave;s, ou acc&egrave;s multi-utilisateurs non autoris&eacute;.
                </p>
                <p>
                  <strong className="text-foreground">Il est strictement interdit</strong> d'enregistrer, partager, transf&eacute;rer, revendre,
                  republier ou rediffuser les contenus, y compris par captures d'&eacute;cran, transferts de messages,
                  bots, canaux miroirs ou tout moyen &eacute;quivalent. Toute violation peut entra&icirc;ner la r&eacute;siliation
                  imm&eacute;diate de la licence, sans remboursement.
                </p>
              </div>
            </div>

            {/* 15. Propri&eacute;t&eacute; intellectuelle */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  15. Propri&eacute;t&eacute; intellectuelle
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le site, sa structure, les contenus, marques, logos, textes, &eacute;l&eacute;ments graphiques et bases de
                  donn&eacute;es sont prot&eacute;g&eacute;s par les droits de propri&eacute;t&eacute; intellectuelle et demeurent la propri&eacute;t&eacute;
                  exclusive de Citadelle ou de ses conc&eacute;dants. Toute reproduction, extraction, diffusion ou
                  exploitation non autoris&eacute;e est interdite.
                </p>
              </div>
            </div>

            {/* 16. Responsabilit&eacute; */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  16. Responsabilit&eacute;
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Les contenus sont fournis &agrave; titre informatif et &eacute;ducatif, sans garantie d'exactitude,
                  d'exhaustivit&eacute;, d'actualit&eacute; ni de r&eacute;sultat. Les &eacute;v&eacute;nements sportifs comportent une part
                  d'al&eacute;a et aucune projection ne peut &ecirc;tre consid&eacute;r&eacute;e comme certaine.
                </p>
                <p>
                  Dans les limites autoris&eacute;es par la loi applicable, Citadelle ne saurait &ecirc;tre tenue responsable
                  des d&eacute;cisions du client ni des cons&eacute;quences directes ou indirectes, notamment pertes financi&egrave;res,
                  pertes d'opportunit&eacute; ou pr&eacute;judices commerciaux.
                </p>
                <p>
                  Si la responsabilit&eacute; de Citadelle devait &ecirc;tre retenue, elle est en tout &eacute;tat de cause limit&eacute;e
                  au montant effectivement pay&eacute; par le client pour la licence concern&eacute;e.
                </p>
              </div>
            </div>

            {/* 17. Suspension, r&eacute;siliation */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  17. Suspension, r&eacute;siliation
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Citadelle peut suspendre ou r&eacute;silier l'acc&egrave;s du client, de plein droit et sans remboursement,
                  en cas de violation des CGU/CGV, fraude, atteinte &agrave; la s&eacute;curit&eacute;, ou usage abusif.
                </p>
                <p>
                  Le client peut cesser d'utiliser le service &agrave; tout moment. Cette cessation n'ouvre pas droit
                  &agrave; remboursement, sauf disposition imp&eacute;rative contraire.
                </p>
              </div>
            </div>

            {/* 18. Support */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Headphones className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  18. Support
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le support est accessible via notre canal Telegram. Le client s'engage &agrave; fournir des informations
                  exactes et utiles &agrave; la r&eacute;solution (horodatage, description, captures si n&eacute;cessaire).
                </p>
                <p>
                  Lorsque le client est un consommateur au sens du droit de l'Union europ&eacute;enne, il peut &eacute;galement
                  recourir, le cas &eacute;ch&eacute;ant, &agrave; des modes alternatifs de r&egrave;glement des litiges pr&eacute;vus par la
                  r&eacute;glementation applicable.
                </p>
              </div>
            </div>

            {/* 19. Donn&eacute;es personnelles */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  19. Donn&eacute;es personnelles
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Les traitements de donn&eacute;es personnelles r&eacute;alis&eacute;s dans le cadre de la vente et de l'ex&eacute;cution
                  des licences sont d&eacute;crits dans la politique de confidentialit&eacute; du site.
                </p>
                <p>
                  Le client est inform&eacute; que l'utilisation de Telegram implique un service tiers susceptible de
                  traiter certaines donn&eacute;es conform&eacute;ment &agrave; ses propres conditions et politiques, totalement
                  dissoci&eacute;es de celles de Citadelle.
                </p>
              </div>
            </div>

            {/* 20-22. Autres */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Gavel className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  20-22. Dispositions finales
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  <strong className="text-foreground">Modification des CGV :</strong> Citadelle peut modifier les pr&eacute;sentes CGV.
                  La version applicable est celle accept&eacute;e par le client au moment de la commande.
                </p>
                <p>
                  <strong className="text-foreground">Droit applicable :</strong> Les pr&eacute;sentes CGV sont r&eacute;gies par le droit maltais.
                  Si le client est un consommateur, il b&eacute;n&eacute;ficie des dispositions imp&eacute;ratives &eacute;ventuellement
                  applicables en vertu du droit de l'Union europ&eacute;enne.
                </p>
                <p>
                  <strong className="text-foreground">Dispositions diverses :</strong> Si une clause des CGV est d&eacute;clar&eacute;e nulle
                  ou inapplicable, les autres clauses demeurent en vigueur.
                </p>
              </div>
            </div>

            {/* Liens vers autres documents */}
            <div className="p-6 bg-muted/30 rounded-lg border border-border">
              <h3 className="font-semibold text-foreground mb-4">Documents compl&eacute;mentaires</h3>
              <div className="flex flex-wrap gap-4">
                <Link to="/mentions-legales" className="text-primary hover:underline text-sm">
                  Mentions l&eacute;gales
                </Link>
                <Link to="/cgu" className="text-primary hover:underline text-sm">
                  Conditions G&eacute;n&eacute;rales d'Utilisation
                </Link>
                <Link to="/disclaimer" className="text-primary hover:underline text-sm">
                  Disclaimer
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Back */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4 text-center">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour &agrave; l'accueil
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CGV;
