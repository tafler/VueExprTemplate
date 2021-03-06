describe('test api main page', () => {
  it('we wait homepage', (done) => {
    chai.request(server).get('/')
    .then((res) => {
      expect(res).to.have.status(200);
      expect(res.text).to.be.a('string');
      expect(res.text.length).to.not.be.equal(0);
      done();
    })
    .catch(err => {      
      done(err);
    })
  })
})
