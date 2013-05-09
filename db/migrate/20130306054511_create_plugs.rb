class CreatePlugs < ActiveRecord::Migration
  def change
    create_table :plugs do |t|
      t.string :title
      t.string :desc
      t.belongs_to :club
      t.has_many :tags

      t.timestamps
    end
  end
end
