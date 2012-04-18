// define([ 'use!backbone', 'use!underscore', 'jquery' ], function(Backbone, _, $) {
//   describe("a Backbone view", function() {
//     var tpl, model, view;
// 
//     beforeEach(function() {
//       tpl = '<div id="my-view"><%= gree %></div>';
//       model = new Backbone.Model({
//         gr : 'Hello, world'
//       });
// 
//       if (view && view.remove) {
//         view.remove();
//       }
//     });
// 
//     it("you should be able to render a view using a template", function() {
//       var MyView = Backbone.View.extend({
//         template : tpl,
//         render : function() {
//           // write code here to make the tests below pass
//           _.template(tpl, {gree: model.gr})
//         }
//       });
// 
//       view = new MyView({
//         model : model
//       }).render();
// 
//       expect(document.getElementById('my-view')).to.be.ok();
//       expect(document.getElementById('my-view').innerHTML).to.contain('Hello, world');
//     });
// 
//     it("you should be able to update the view when the model changes", function() {
//       var MyView = Backbone.View.extend({
//         // fill in the code required in the initialize and render methods
//         // to make the tests below pass
//         initialize : function() {
// 
//         },
//         template : tpl,
//         render : function() {
// 
//         }
//       });
// 
//       view = new MyView({
//         model : model
//       }).render();
// 
//       model.set('gr', 'Goodbye, world');
// 
//       expect(document.getElementById('my-view').innerHTML).to.contain('Goodbye, world');
//       expect(document.getElementById('my-view').innerHTML).not.to.contain('Hello, world');
//     });
// 
//   });
// 
// });
