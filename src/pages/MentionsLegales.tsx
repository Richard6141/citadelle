import { Link } from "react-router-dom";
import { ArrowLeft, Building2, Scale, Shield, Globe, Database, Cookie, FileText, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const MentionsLegales = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Mentions l&eacute;gales
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Informations l&eacute;gales relatives &agrave; l'&eacute;diteur du site Citadelle.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-12">

            {/* Editeur */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  &Eacute;diteur du site
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>Le pr&eacute;sent site est &eacute;dit&eacute; par :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Citadelle Ltd</strong></li>
                  <li>Soci&eacute;t&eacute; &agrave; responsabilit&eacute; limit&eacute;e de droit maltais</li>
                  <li>Immatricul&eacute;e au Malta Business Registry sous le num&eacute;ro : XXXXXX</li>
                  <li>Capital social : XXX EUR</li>
                  <li>Si&egrave;ge social : XXXXXX</li>
                </ul>
              </div>
            </div>

            {/* Objet */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Objet
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le site a pour objet la pr&eacute;sentation et la fourniture d'un service de contenus informatifs,
                  analytiques et p&eacute;dagogiques relatifs &agrave; des &eacute;v&eacute;nements sportifs, incluant notamment des analyses,
                  tendances, projections et signaux &agrave; caract&egrave;re indicatif.
                </p>
                <p>
                  L'acc&egrave;s &agrave; certains contenus est propos&eacute; via des licences d'acc&egrave;s, payantes, permettant l'acc&egrave;s
                  &agrave; un espace r&eacute;serv&eacute; aux membres. Certaines licences peuvent &ecirc;tre limit&eacute;es dans le temps, sans
                  constituer une promesse de r&eacute;sultat, une garantie de performance, ni une mesure des r&eacute;sultats
                  individuels des utilisateurs.
                </p>
                <p>
                  Les conditions applicables aux licences, incluant les modalit&eacute;s de dur&eacute;e, de cl&ocirc;ture anticip&eacute;e
                  et d'acc&egrave;s, sont pr&eacute;cis&eacute;es dans les <Link to="/cgu" className="text-primary hover:underline">CGU</Link> et,
                  le cas &eacute;ch&eacute;ant, dans les <Link to="/cgv" className="text-primary hover:underline">CGV</Link> du site.
                </p>
              </div>
            </div>

            {/* Absence d'activit&eacute; de jeu */}
            <div className="p-8 bg-card rounded-xl border border-primary/20">
              <div className="flex items-start gap-4 mb-6">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Absence d'activit&eacute; de jeu, de pari, d'interm&eacute;diation ou de gestion de mises
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Citadelle n'exerce aucune activit&eacute; d'op&eacute;rateur de jeux ou de paris</strong>,
                  n'organise aucun jeu d'argent, n'accepte ni ne collecte aucune mise, n'ex&eacute;cute aucun pari,
                  ne re&ccedil;oit ni ne redistribue aucun gain, n'agit pas en qualit&eacute; d'interm&eacute;diaire, de mandataire,
                  de courtier ou de gestionnaire de mises, et n'intervient dans aucune transaction financi&egrave;re
                  li&eacute;e &agrave; des jeux d'argent.
                </p>
                <p>
                  Sauf indication expresse contraire dans un document contractuel distinct, Citadelle ne dispose
                  d'aucun lien capitalistique, contractuel, promotionnel ou d'affiliation avec des op&eacute;rateurs
                  de paris ou des bookmakers, et n'a pas vocation &agrave; orienter les utilisateurs vers une plateforme
                  de pari d&eacute;termin&eacute;e.
                </p>
                <p>
                  L'utilisateur demeure seul d&eacute;cisionnaire et seul responsable des actions qu'il entreprend,
                  y compris lorsqu'il utilise, interpr&egrave;te ou applique les informations disponibles sur le site.
                </p>
              </div>
            </div>

            {/* Responsabilit&eacute; */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Scale className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Responsabilit&eacute;, limitation
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Les informations, contenus, m&eacute;thodes et analyses diffus&eacute;s sur le site sont fournis &laquo; en l'&eacute;tat &raquo;,
                  peuvent &ecirc;tre modifi&eacute;s &agrave; tout moment et ne sont assortis d'aucune garantie, expresse ou implicite.
                </p>
                <p>
                  Compte tenu de la nature al&eacute;atoire des &eacute;v&eacute;nements sportifs et des limites inh&eacute;rentes &agrave; toute
                  mod&eacute;lisation, simulation ou projection, Citadelle ne garantit ni l'exactitude, ni l'exhaustivit&eacute;,
                  ni l'actualit&eacute; des contenus, ni l'obtention d'un r&eacute;sultat quelconque.
                </p>
                <p>
                  Citadelle ne saurait &ecirc;tre tenue responsable des d&eacute;cisions prises par les utilisateurs sur la base
                  des contenus fournis, ni des cons&eacute;quences directes ou indirectes pouvant en d&eacute;couler, notamment
                  des pertes financi&egrave;res, pertes d'opportunit&eacute;, pr&eacute;judices commerciaux ou atteintes &agrave; l'image.
                </p>
                <p>
                  L'utilisateur reconna&icirc;t utiliser le site sous sa seule responsabilit&eacute; et renonce, dans toute
                  la mesure permise par la r&eacute;glementation applicable, &agrave; rechercher la responsabilit&eacute; de Citadelle
                  au titre de l'usage qu'il fait des informations mises &agrave; disposition.
                </p>
              </div>
            </div>

            {/* Acc&egrave;s au site */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Acc&egrave;s au site, v&eacute;rification de la r&eacute;glementation locale
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le site est destin&eacute; &agrave; un public majeur, tel que d&eacute;fini par la l&eacute;gislation applicable dans
                  le pays de r&eacute;sidence de l'utilisateur.
                </p>
                <p>
                  L'utilisateur d&eacute;clare acc&eacute;der au site de sa propre initiative et s'engage &agrave; v&eacute;rifier,
                  pr&eacute;alablement &agrave; toute utilisation, que l'acc&egrave;s au site et l'usage de ses contenus sont
                  autoris&eacute;s par la r&eacute;glementation qui lui est applicable, notamment en mati&egrave;re de jeux d'argent,
                  de consommation et de protection des donn&eacute;es.
                </p>
                <p>
                  Citadelle ne saurait &ecirc;tre tenue responsable d'une utilisation du site en violation des lois
                  ou r&egrave;glements applicables au lieu de r&eacute;sidence de l'utilisateur.
                </p>
              </div>
            </div>

            {/* Donn&eacute;es personnelles */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Donn&eacute;es personnelles
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Citadelle agit en qualit&eacute; de responsable de traitement au sens du R&egrave;glement (UE) 2016/679 (RGPD)
                  pour les traitements de donn&eacute;es personnelles mis en oeuvre via le site.
                </p>
                <p>
                  Les modalit&eacute;s relatives aux traitements, leurs finalit&eacute;s, les cat&eacute;gories de donn&eacute;es concern&eacute;es,
                  les destinataires, les dur&eacute;es de conservation, ainsi que les droits des personnes (notamment
                  droits d'acc&egrave;s, de rectification, d'effacement, d'opposition, de limitation et de portabilit&eacute;)
                  sont d&eacute;crits dans la politique de confidentialit&eacute; accessible sur le site.
                </p>
                <p>
                  L'autorit&eacute; de contr&ocirc;le chef de file comp&eacute;tente est l'Information and Data Protection Commissioner
                  (IDPC) - Malte, sans pr&eacute;judice du droit, pour toute personne concern&eacute;e, d'introduire une r&eacute;clamation
                  aupr&egrave;s de l'autorit&eacute; de contr&ocirc;le de l'&Eacute;tat membre de sa r&eacute;sidence habituelle.
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Cookies
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le site peut d&eacute;poser des cookies et autres traceurs, notamment des cookies strictement
                  n&eacute;cessaires &agrave; son fonctionnement, et, le cas &eacute;ch&eacute;ant, des cookies soumis au recueil
                  du consentement de l'utilisateur.
                </p>
                <p>
                  Les r&egrave;gles applicables aux cookies (finalit&eacute;s, dur&eacute;e de conservation, modalit&eacute;s d'acceptation
                  ou de refus) sont d&eacute;taill&eacute;es dans la politique cookies accessible sur le site.
                </p>
              </div>
            </div>

            {/* Propri&eacute;t&eacute; intellectuelle */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Propri&eacute;t&eacute; intellectuelle
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Le site, sa structure, ainsi que l'ensemble des &eacute;l&eacute;ments qui le composent, incluant notamment
                  les textes, analyses, bases de donn&eacute;es, marques, logos, &eacute;l&eacute;ments graphiques, interfaces et contenus,
                  sont prot&eacute;g&eacute;s par les lois applicables en mati&egrave;re de propri&eacute;t&eacute; intellectuelle et demeurent
                  la propri&eacute;t&eacute; exclusive de Citadelle ou de ses conc&eacute;dants.
                </p>
                <p>
                  Toute reproduction, repr&eacute;sentation, adaptation, extraction, r&eacute;utilisation, diffusion ou exploitation,
                  totale ou partielle, par quelque proc&eacute;d&eacute; que ce soit, sans autorisation &eacute;crite pr&eacute;alable de Citadelle,
                  est strictement interdite et est susceptible d'engager la responsabilit&eacute; de son auteur.
                </p>
              </div>
            </div>

            {/* Droit applicable */}
            <div>
              <div className="flex items-start gap-4 mb-6">
                <Gavel className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h2 className="font-serif text-2xl font-semibold text-foreground">
                  Droit applicable et juridiction comp&eacute;tente
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground ml-10">
                <p>
                  Les pr&eacute;sentes mentions l&eacute;gales sont r&eacute;gies par le droit maltais.
                </p>
                <p>
                  Tout litige relatif &agrave; la validit&eacute;, l'interpr&eacute;tation, l'ex&eacute;cution ou la cessation des pr&eacute;sentes,
                  ainsi qu'&agrave; l'utilisation du site, rel&egrave;vera de la comp&eacute;tence exclusive des juridictions de Malte,
                  sous r&eacute;serve des dispositions imp&eacute;ratives &eacute;ventuellement applicables au consommateur en vertu
                  du droit de l'Union europ&eacute;enne.
                </p>
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

export default MentionsLegales;
