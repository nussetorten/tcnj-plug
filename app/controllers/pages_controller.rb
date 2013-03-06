class PagesController < ApplicationController
  def landing
  end
  def club
    respond_to do |format|
      format.html # club.html.erb
    end
  end
  def acct
    respond_to do |format|
      format.html # acct.html.erb
    end
  end
  def noacct
    respond_to do |format|
      format.html # noacct.html.erb
    end
  end
end
