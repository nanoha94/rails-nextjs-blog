class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :context
      t.datetime :start_time
      t.datetime :end_time
      t.integer :status

      t.timestamps
    end
  end
end
