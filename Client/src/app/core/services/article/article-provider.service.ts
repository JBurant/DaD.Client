import { ArticleModel } from './article-model.service';
import { Backend } from '../backend/backend.service';
import { Injectable } from '@angular/core';
import { ArticleHeader } from './article-header.service';

@Injectable()
export class ArticleProvider {
  private articles: ArticleModel[] = [];

  constructor(
    //private backend: Backend,
  ) { }

  getArticles() {
    //this.backend.getAll().then((heroes: ArticleModel[]) => {
    //  this.articles.push(...heroes); // fill cache
    //});
    let article = new ArticleModel(new ArticleHeader("Lorem ipsum", "123456789", "Jirka"), "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Vestibulum fermentum risus at elementum sodales.Aenean ullamcorper sapien varius odio tristique, cursus semper massa feugiat.Etiam id laoreet nisl.Cras nec vestibulum enim.Nam eget imperdiet quam, a aliquet est.Donec efficitur, mauris sit amet tincidunt maximus, mauris sapien auctor velit, ut feugiat enim magna quis nisl.Pellentesque fermentum nulla ex, sed facilisis libero egestas sit amet. Praesent auctor ornare risus, ut aliquam nibh malesuada id.Sed massa erat, pharetra sed urna quis, bibendum euismod urna.Vivamus vel elementum tortor.Ut eleifend metus ac cursus maximus.Nullam in libero id elit pretium venenatis ut tempor turpis.Mauris vitae dolor a mauris lacinia euismod.Morbi porttitor scelerisque sapien, a dictum felis blandit dapibus.Ut semper sit amet nisi eget finibus.In enim eros, elementum sed nulla sed, sodales aliquam nibh.Pellentesque sit amet elit quis quam lacinia efficitur.Mauris pharetra cursus tortor, a posuere velit tempus ut. Integer commodo sollicitudin viverra.Phasellus eget ullamcorper mi.Integer porta dapibus mattis.Vestibulum gravida elementum interdum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Integer in ex tristique, porta eros eget, euismod enim.Maecenas dictum neque vitae tortor mollis luctus.Aliquam erat volutpat.Morbi varius ante vel metus rutrum feugiat.Phasellus euismod congue blandit.Donec in tristique tellus.Donec vitae tortor nec felis efficitur tristique.Quisque nec blandit turpis.Maecenas dapibus arcu vel scelerisque pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Mauris dictum justo ut magna posuere, ac tempor magna gravida.Cras non magna mi.Donec eu massa lorem.Mauris at venenatis mi, nec egestas risus.Cras pharetra lacinia massa, eu mattis sem aliquet eget.Aenean sagittis nibh a justo euismod cursus.Ut iaculis suscipit leo.Vestibulum malesuada, nisl ut imperdiet posuere, sem turpis pulvinar lacus, nec vehicula tortor ante et nisi.Maecenas facilisis fermentum nibh, quis dictum nisl auctor commodo.Vestibulum aliquet posuere velit nec ornare. Quisque feugiat, sapien in suscipit placerat, orci nibh elementum libero, a eleifend mauris libero ut est.In hac habitasse platea dictumst.Mauris sagittis felis sit amet leo convallis, in dignissim libero ultricies.Praesent et dolor a leo consectetur molestie vel in odio.In aliquet scelerisque nunc sit amet tempus.Sed a sagittis lectus, ac mattis nibh.Mauris fringilla nulla ut enim mattis, quis sagittis augue tincidunt.Maecenas felis magna, lobortis ac finibus a, sagittis ut dolor.Sed maximus justo efficitur nisi lobortis vehicula.Vivamus est ante, convallis non mauris ac, posuere feugiat diam. ");
    let article2 = new ArticleModel(new ArticleHeader("Lorem ipsum", "123456789", "Jirka"), "Lorem ipsum");
    return [article, article2];
  }

  getListOfArticles() {
    return [new ArticleHeader("Lorem ipsum", "123456789", "Jirka"), new ArticleHeader("Lorem ipsum", "123456789", "Jirka")];
  }
}
